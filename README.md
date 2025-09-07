# RetailCRM Bot API Schema

[![npm version](https://img.shields.io/npm/v/@integratop/retailcrm-bot-api-schema.svg)](https://www.npmjs.com/package/@integratop/retailcrm-bot-api-schema)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

OpenAPI схема для REST Bot API CRM системы RetailCRM. Библиотека предоставляет полное описание API для работы с ботами, чатами, сообщениями, диалогами и другими сущностями RetailCRM.

## Установка

```bash
npm install @integratop/retailcrm-bot-api-schema --save-dev
```

```bash
yarn add @integratop/retailcrm-bot-api-schema --save-dev
```

```bash
pnpm add @integratop/retailcrm-bot-api-schema --save-dev
```

## Использование

### Как инструмент командной строки

Библиотеку можно использовать как CLI инструмент для получения OpenAPI схемы в stdout:

```bash
# Получить схему в формате JSON
npx @integratop/retailcrm-bot-api-schema

# Получить схему в формате YAML
npx @integratop/retailcrm-bot-api-schema --yaml

# Сохранить схему в файл
npx @integratop/retailcrm-bot-api-schema > bot-api-schema.json

# Использовать с jq для фильтрации
npx @integratop/retailcrm-bot-api-schema | jq '.paths["/bots"]'
```

### Импорт JSON схемы

```typescript
import schema from "@integratop/retailcrm-bot-api-schema/schemas/schema.json" with { type: "json" };

console.log(schema.info);
```

### Импорт TypeScript объекта

```typescript
import { schema } from '@integratop/retailcrm-bot-api-schema';

console.log(schema.info);
```

## Разработка

### Сборка проекта

```bash
# Установка зависимостей
pnpm install

# Запуск тестов
pnpm test

# Сборка проекта
pnpm build
```

### Обновление схемы

Для обновления схемы из внешнего источника:

```bash
# Установите переменную окружения с URL схемы
export RETAIL_CRM_BOT_API_SCHEMA_URL="https://ваш-url-схемы/schema.json"

# Загрузка и обновление схемы
pnpm download-schema
pnpm build
```

## Лицензия

MIT License.

## Версионирование

Проект использует [Semantic Versioning](https://semver.org/).

## Безопасность

Если вы обнаружили уязвимость безопасности, пожалуйста, сообщите нам об этом.

---

**Примечание**: Эта библиотека содержит только схему OpenAPI и не предоставляет реализацию клиента. Для работы с API RetailCRM необходимо реализовать клиент на основе предоставленной схемы.
