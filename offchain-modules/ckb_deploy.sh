export CONFIG_PATH="./config.json"
export FORCE_BRIDGE_PROJECT_DIR="/home/wetee/work/wetee/force-bridge"
export FORCE_BRIDGE_KEYSTORE_PASSWORD="123456"

yarn build
ts-node ./packages/scripts/src/devDocker.ts