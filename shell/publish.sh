set -e

pnpm build

cd packages/web-vue
npm publish
cs -

echo "✅ Publish completed"