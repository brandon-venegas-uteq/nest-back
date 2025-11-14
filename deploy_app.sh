#!/bin/bash

BLUE_PORT=8001
GREEN_PORT=8002

# Puerto Docker
CONTAINER_PORT=3000


STATE_FILE="/opt/scripts/blue_green.state"

# Fichero de configuración de Nginx
NGINX_UPSTREAM_CONFIG="/etc/nginx/current_upstream.conf"

# La imagen de Docker que nos pasó GitHub Actions
DOCKER_IMAGE=$1

# Asegurarse de que el script falle si un comando falla
set -e

echo "--- Iniciando despliegue Blue/Green (Docker) ---"
echo "Imagen a desplegar: $DOCKER_IMAGE"

if [ ! -f "$STATE_FILE" ]; then
    echo "blue" > $STATE_FILE
fi

CURRENT_LIVE_ENV=$(cat $STATE_FILE)

if [ "$CURRENT_LIVE_ENV" == "blue" ]; then
    TARGET_PORT=$GREEN_PORT
    TARGET_COLOR="green"
    NEW_STATE="green"
    OLD_COLOR="blue"
    echo "Estado actual: BLUE en vivo. Desplegando en GREEN (Puerto Host: $TARGET_PORT)."
else
    TARGET_PORT=$BLUE_PORT
    TARGET_COLOR="blue"
    NEW_STATE="blue"
    OLD_COLOR="green"
    echo "Estado actual: GREEN en vivo. Desplegando en BLUE (Puerto Host: $TARGET_PORT)."
fi


echo "Haciendo 'docker pull' de la nueva imagen..."
docker pull $1


echo "Limpiando contenedor inactivo anterior 'app-$TARGET_COLOR'..."
docker stop "app-$TARGET_COLOR" || true
docker rm "app-$TARGET_COLOR" || true

echo "Iniciando nuevo contenedor 'app-$TARGET_COLOR' en puerto $TARGET_PORT..."

docker run -d \
    --name "app-$TARGET_COLOR" \
    -p $TARGET_PORT:$CONTAINER_PORT \
    -e PORT=$CONTAINER_PORT \
    -e APP_COLOR=$TARGET_COLOR \
    --restart always \
    $DOCKER_IMAGE

echo "Esperando 10s para que el contenedor inicie..."
sleep 10


echo "Ejecutando Smoke Test en http://127.0.0.1:$TARGET_PORT ..."
if ! curl --fail --silent --show-error http://127.0.0.1:$TARGET_PORT/ > /dev/null; then
    echo "**********************************************"
    echo "¡ERROR! El Smoke Test falló para 'app-$TARGET_COLOR'."
    echo "Despliegue cancelado."
    echo "Eliminando contenedor fallido: 'app-$TARGET_COLOR'"
    docker stop "app-$TARGET_COLOR" || true
    docker rm "app-$TARGET_COLOR" || true
    echo "**********************************************"
    exit 1
else
    echo "Smoke Test exitoso."
fi

echo "Actualizando Nginx para apuntar al upstream $TARGET_COLOR"
echo "set \$current_upstream http://127.0.0.1:$TARGET_PORT;" > $NGINX_UPSTREAM_CONFIG

sudo nginx -s reload

echo "Actualizando estado a $NEW_STATE"
echo "$NEW_STATE" > $STATE_FILE

echo "Deteniendo el entorno inactivo anterior: 'app-$OLD_COLOR'"
docker stop "app-$OLD_COLOR" || true
docker rm "app-$OLD_COLOR" || true

echo "--- ¡DESPLIEGUE COMPLETADO! ---"
echo "$TARGET_COLOR (Docker) está ahora en vivo."

exit 0


NGINX

server {
    listen 80;
    server_name app.com;

    location / {
        proxy_pass $current_upstream;

        # Cabeceras estándar para un proxy reverso
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

Inicializa variables

echo "blue" | sudo tee /opt/scripts/blue_green.state > /dev/null

Inicializar Nginx

echo "set \$current_upstream [http://127.0.0.1:8001](http://127.0.0.1:8001);" | sudo tee /etc/nginx/current_upstream.conf > /dev/null