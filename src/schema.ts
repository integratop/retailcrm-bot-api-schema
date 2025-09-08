import { OpenAPIV3 } from "openapi-types";

export const schema: OpenAPIV3.Document = {
  openapi: "3.0.3",
  info: {
    title: "MG Node Bot API",
    version: "1.0.0",
    description: "MG Node Bot API",
  },
  servers: [
    {
      url: "/api/bot/v1",
    },
  ],
  tags: [
    {
      name: "Bot",
    },
    {
      name: "Channel",
    },
    {
      name: "Chat",
    },
    {
      name: "Command",
    },
    {
      name: "Customer",
    },
    {
      name: "Dialog",
    },
    {
      name: "File",
    },
    {
      name: "User",
    },
    {
      name: "Message",
    },
    {
      name: "WS",
    },
  ],
  paths: {
    "/bots": {
      get: {
        summary: "Получить список ботов",
        description: "Получает список всех доступных ботов с необязательной фильтрацией",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Bot"],
        operationId: "ListBots",
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/BotActiveQuery",
          },
          {
            $ref: "#/components/parameters/BotRoleQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/BotsListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/my/info": {
      patch: {
        summary: "Обновить текущий профиль бота",
        description: "Обновляет сведения о текущем аутентифицированном боте",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Bot"],
        operationId: "UpdateBot",
        requestBody: {
          $ref: "#/components/requestBodies/UpdateBotRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/channels": {
      get: {
        summary: "Получить доступные каналы",
        description: "Возвращает список каналов с необязательными фильтрами",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Channel"],
        operationId: "ListChannels",
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/ChannelTypeQuery",
          },
          {
            $ref: "#/components/parameters/ChannelActiveQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/ChannelsListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/chats": {
      get: {
        summary: "Получить список чатов",
        description: "Возвращает отфильтрованный список чатов, доступных боту",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Chat"],
        operationId: "ListChats",
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            name: "channel_id",
            in: "query",
            description: "Фильтр по ID канала",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "ChannelID",
          },
          {
            name: "channel_type",
            in: "query",
            description: "Фильтр по типу канала",
            schema: {
              $ref: "#/components/schemas/ChannelType",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            name: "customer_id",
            in: "query",
            description: "Фильтр по ID клиента",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "CustomerID",
          },
          {
            name: "customer_external_id",
            in: "query",
            description: "Фильтр по внешнему ID клиента",
            schema: {
              type: "string",
              minLength: 1,
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "CustomerExternalID",
          },
          {
            name: "include_mass_communication",
            in: "query",
            description: "Включать ли чаты массовых коммуникаций",
            schema: {
              $ref: "#/components/schemas/Boolean",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/ChatsListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/my/commands": {
      get: {
        summary: "Список доступных команд бота",
        description: "Возвращает список команд бота, отфильтрованных по необязательным параметрам",
        operationId: "ListCommands",
        tags: ["Command"],
        security: [
          {
            bot_token: [],
          },
        ],
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            name: "name",
            in: "query",
            description: "Фильтр команд по имени",
            schema: {
              type: "string",
              maxLength: 32,
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,max=32,command_name",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/CommandsResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/my/commands/{command_name}": {
      put: {
        summary: "Создать или обновить команду",
        description: "Создаёт новую команду либо обновляет существующую с указанным именем",
        operationId: "CreateOrUpdateCommand",
        tags: ["Command"],
        security: [
          {
            bot_token: [],
          },
        ],
        parameters: [
          {
            $ref: "#/components/parameters/CommandNamePath",
          },
        ],
        requestBody: {
          $ref: "#/components/requestBodies/CreateOrUpdateCommandRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/CommandCreateResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
      delete: {
        summary: "Удалить команду бота",
        description: "Удаляет команду, связанную с указанным именем",
        operationId: "DeleteCommand",
        tags: ["Bot"],
        security: [
          {
            bot_token: [],
          },
        ],
        parameters: [
          {
            $ref: "#/components/parameters/CommandNamePath",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/customers": {
      get: {
        summary: "Получить список клиентов",
        description: "Возвращает список клиентов",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Customer"],
        operationId: "ListCustomers",
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
          {
            description: "ID канала",
            in: "query",
            name: "channel_id",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "ChannelID",
          },
          {
            description: "Тип канала",
            in: "query",
            name: "channel_type",
            schema: {
              $ref: "#/components/schemas/ChannelType",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            description: "Внешний ID",
            in: "query",
            name: "external_id",
            schema: {
              type: "string",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-go-name": "ExternalID",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/CustomersListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/dialogs": {
      get: {
        summary: "Получить список диалогов",
        description: "Возвращает список диалогов с необязательными фильтрами",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Dialog"],
        operationId: "ListDialogs",
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
          {
            description: "ID чата",
            in: "query",
            name: "chat_id",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "ChatID",
          },
          {
            description: "ID пользователя",
            in: "query",
            name: "user_id",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "UserID",
          },
          {
            description: "ID бота",
            in: "query",
            name: "bot_id",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "BotID",
          },
          {
            description: "Флаг активности",
            in: "query",
            name: "active",
            schema: {
              $ref: "#/components/schemas/Boolean",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            description: "Необходимо назначить",
            in: "query",
            name: "assign",
            schema: {
              $ref: "#/components/schemas/Boolean",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            description: "С массовыми коммуникациями",
            in: "query",
            name: "include_mass_communication",
            schema: {
              $ref: "#/components/schemas/Boolean",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/DialogsListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/dialogs/{dialog_id}/assign": {
      patch: {
        summary: "Назначить ответственного пользователя для диалога",
        description: "Устанавливает или обновляет пользователя, ответственного за указанный диалог",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Dialog"],
        operationId: "AssignDialogResponsible",
        parameters: [
          {
            $ref: "#/components/parameters/DialogIdPath",
          },
        ],
        requestBody: {
          $ref: "#/components/requestBodies/DialogResponsibleRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/DialogAssignResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/dialogs/{dialog_id}/unassign": {
      patch: {
        summary: "Отменить назначение ответственного пользователя для диалога",
        description: "Снимает текущего ответственного пользователя с указанного диалога",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Dialog"],
        operationId: "UnassignDialogResponsible",
        parameters: [
          {
            $ref: "#/components/parameters/DialogIdPath",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/DialogUnassignResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/dialogs/{dialog_id}/close": {
      delete: {
        summary: "Закрыть диалог",
        description:
          "Помечает указанный диалог как закрытый, блокируя дальнейшие обновления или сообщения",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Dialog"],
        operationId: "CloseDialog",
        parameters: [
          {
            $ref: "#/components/parameters/DialogIdPath",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/dialogs/{dialog_id}/tags/add": {
      patch: {
        summary: "Добавить теги к диалогу",
        description: "Добавляет теги к указанному диалогу",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Dialog"],
        operationId: "DialogAddTags",
        parameters: [
          {
            $ref: "#/components/parameters/DialogIdPath",
          },
        ],
        requestBody: {
          $ref: "#/components/requestBodies/DialogAddTagsRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/dialogs/{dialog_id}/tags/delete": {
      patch: {
        summary: "Удалить теги из диалога",
        description: "Удаляет теги из указанного диалога",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Dialog"],
        operationId: "DialogDeleteTags",
        parameters: [
          {
            $ref: "#/components/parameters/DialogIdPath",
          },
        ],
        requestBody: {
          $ref: "#/components/requestBodies/DialogDeleteTagsRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/chats/{chat_id}/dialogs": {
      post: {
        summary: "Создать диалог",
        description: "Создаёт новый диалог в указанном чате",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Dialog"],
        operationId: "CreateDialog",
        parameters: [
          {
            $ref: "#/components/parameters/ChatIdPath",
          },
        ],
        requestBody: {
          $ref: "#/components/requestBodies/CreateDialogRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/CreateDialogResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/files/{id}": {
      get: {
        summary: "Получить прямой URL файла по ID",
        description:
          "Возвращает прямой URL для скачивания ранее загруженного файла по его уникальному идентификатору",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["File"],
        operationId: "GetFileUrl",
        parameters: [
          {
            $ref: "#/components/parameters/FileIdPath",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/FullFileResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/files/upload": {
      post: {
        summary: "Загрузить новый файл",
        description: "Загружает новый файл на сервер с использованием multipart/form-data",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["File"],
        operationId: "UploadFile",
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                required: ["file"],
                properties: {
                  file: {
                    type: "string",
                    format: "binary",
                    description:
                      "Двоичные данные файла для загрузки (изображение, документ, видео)",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            $ref: "#/components/responses/UploadResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/files/upload_by_url": {
      post: {
        summary: "Загрузить файл по URL",
        description: "Скачивает файл по указанному URL и загружает его на сервер",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["File"],
        operationId: "UploadFileByUrl",
        requestBody: {
          $ref: "#/components/requestBodies/UploadFileByUrlRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/UploadResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/files/{id}/meta": {
      put: {
        summary: "Обновляет метаданные ранее загруженного файла",
        description: "Обновляет метаданные указанного файла по его идентификатору",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["File"],
        operationId: "UpdateFileMetadata",
        parameters: [
          {
            $ref: "#/components/parameters/FileIdPath",
          },
        ],
        requestBody: {
          $ref: "#/components/requestBodies/UpdateFileMetadataRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/UploadResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/members": {
      get: {
        summary: "Получает список участников чата",
        description: "Возвращает список участников чата с учётом необязательных фильтров",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["User"],
        operationId: "ListMembers",
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
          {
            name: "chat_id",
            in: "query",
            description: "Фильтр по идентификатору чата",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "ChatID",
          },
          {
            name: "user_id",
            in: "query",
            description: "Фильтр по идентификатору пользователя",
            schema: {
              type: "integer",
              minimum: 1,
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "UserID",
          },
          {
            name: "state",
            in: "query",
            description: "Фильтр по состоянию участника",
            schema: {
              type: "string",
              enum: ["active", "kicked", "leaved"],
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,oneof=active kicked leaved",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/ChatMemberListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/users": {
      get: {
        summary: "Получает список пользователей",
        description: "Возвращает список пользователей с учётом необязательных фильтров",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["User"],
        operationId: "ListUsers",
        parameters: [
          {
            $ref: "#/components/parameters/IDQuery",
          },
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
          {
            name: "active",
            in: "query",
            description: "Фильтр пользователей по статусу активности",
            schema: {
              $ref: "#/components/schemas/Boolean",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            name: "online",
            in: "query",
            description: "Фильтр пользователей по онлайн‑статусу",
            schema: {
              $ref: "#/components/schemas/Boolean",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            name: "external_id",
            in: "query",
            description: "Фильтр пользователей по внешнему идентификатору",
            schema: {
              type: "string",
            },
            // @ts-ignore
            "x-go-name": "ExternalID",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/UserListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/messages": {
      get: {
        summary: "Получить список сообщений",
        description: "Возвращает список сообщений, отфильтрованных по разным критериям",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Message"],
        operationId: "ListMessages",
        parameters: [
          {
            $ref: "#/components/parameters/SinceQuery",
          },
          {
            $ref: "#/components/parameters/UntilQuery",
          },
          {
            $ref: "#/components/parameters/SinceIDQuery",
          },
          {
            $ref: "#/components/parameters/UntilIDQuery",
          },
          {
            $ref: "#/components/parameters/LimitQuery",
          },
          {
            name: "id",
            in: "query",
            description: "Фильтр по списку ID сообщений",
            schema: {
              type: "array",
              items: {
                type: "integer",
                format: "int64",
              },
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,dive,min=1",
            },
            // @ts-ignore
            "x-go-name": "ID",
          },
          {
            name: "chat_id",
            in: "query",
            description: "Фильтр по ID чата",
            schema: {
              type: "integer",
              minimum: 1,
              format: "int64",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "ChatID",
          },
          {
            name: "user_id",
            in: "query",
            description: "Фильтр по ID пользователя",
            schema: {
              type: "integer",
              minimum: 1,
              format: "int64",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "UserID",
          },
          {
            name: "customer_id",
            in: "query",
            description: "Фильтр по ID клиента",
            schema: {
              type: "integer",
              minimum: 1,
              format: "int64",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "CustomerID",
          },
          {
            name: "bot_id",
            in: "query",
            description: "Фильтр по ID бота",
            schema: {
              type: "integer",
              minimum: 1,
              format: "int64",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "BotID",
          },
          {
            name: "dialog_id",
            in: "query",
            description: "Фильтр по ID диалога",
            schema: {
              type: "integer",
              minimum: 1,
              format: "int64",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "DialogID",
          },
          {
            name: "channel_id",
            in: "query",
            description: "Фильтр по ID канала",
            schema: {
              type: "integer",
              minimum: 1,
              format: "int64",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1",
            },
            // @ts-ignore
            "x-go-name": "ChannelID",
          },
          {
            name: "channel_type",
            in: "query",
            description: "Фильтр по типу канала",
            schema: {
              $ref: "#/components/schemas/ChannelType",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            name: "type",
            in: "query",
            description: "Фильтр по типу сообщения",
            schema: {
              $ref: "#/components/schemas/MessageType",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,oneof=text system file image order product command audio",
            },
          },
          {
            name: "include_mass_communication",
            in: "query",
            description: "Включать ли сообщения массовых коммуникаций",
            schema: {
              $ref: "#/components/schemas/Boolean",
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          {
            name: "scope",
            in: "query",
            description: "Фильтр по области сообщения (публичное или приватное)",
            schema: {
              type: "string",
              enum: ["public", "private"],
            },
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,oneof=public private",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/MessageListResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
      post: {
        summary: "Отправить новое сообщение",
        description: "Отправка нового сообщения в заданный транспортный канал",
        security: [
          {
            bot_token: [],
          },
        ],
        tags: ["Message"],
        operationId: "SendMessage",
        requestBody: {
          $ref: "#/components/requestBodies/SendMessageRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/SendMessageResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/messages/{message_id}": {
      patch: {
        summary: "Редактировать сообщение по ID",
        description: "Обновляет содержимое или метаданные существующего сообщения",
        tags: ["Message"],
        operationId: "EditMessage",
        security: [
          {
            bot_token: [],
          },
        ],
        parameters: [
          {
            $ref: "#/components/parameters/MessageIdPath",
          },
        ],
        requestBody: {
          $ref: "#/components/requestBodies/EditMessageRequest",
        },
        responses: {
          "200": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
      delete: {
        summary: "Удалить сообщение по ID",
        description: "Удаляет сообщение с указанным ID (операция необратима)",
        tags: ["Message"],
        operationId: "DeleteMessage",
        security: [
          {
            bot_token: [],
          },
        ],
        parameters: [
          {
            $ref: "#/components/parameters/MessageIdPath",
          },
        ],
        responses: {
          "200": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
    "/ws": {
      get: {
        summary: "Соединение WebSocket для обновлений в реальном времени",
        description:
          "Этот URL используется для установления соединения через WebSocket. С помощью этого соединения бот может получать данные по каждому типу событий, на которые он подписан. Список событий передается в виде строки, со значениями, разделенными запятыми.",
        tags: ["WS"],
        operationId: "WebSocketConnection",
        security: [
          {
            bot_token: [],
          },
        ],
        parameters: [
          {
            description:
              "Перечень событий через запятую для подписки по WebSocket (message_new, message_updated, message_restored, message_deleted, dialog_opened, dialog_closed, dialog_assign, chat_created, chat_updated, chats_deleted, user_joined_chat, user_left_chat, user_updated, user_online_updated, channel_updated, customer_updated, bot_updated)",
            in: "query",
            name: "events",
            schema: {
              type: "string",
              example:
                "message_new, message_updated, message_restored, message_deleted, dialog_opened, dialog_closed, dialog_assign, chat_created, chat_updated, chats_deleted, user_joined_chat, user_left_chat, user_updated, user_online_updated, channel_updated, customer_updated, bot_updated",
              minLength: 1,
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "required",
            },
          },
          {
            description:
              "Дополнительные параметры подключения WebSocket (include_mass_communication — позволяют получать события о сообщениях, отправленных с помощью массовых рассылок)",
            in: "query",
            name: "options",
            schema: {
              type: "string",
              example: "include_mass_communication",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty",
            },
          },
        ],
        responses: {
          "101": {
            $ref: "#/components/responses/EmptyResponse",
          },
          default: {
            $ref: "#/components/responses/ErrorResponse",
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bot_token: {
        description: "Токен для авторизации",
        type: "apiKey",
        in: "header",
        name: "X-Bot-Token",
      },
    },
    parameters: {
      IDQuery: {
        description: "Идентификатор запрашиваемого объекта",
        in: "query",
        name: "id",
        schema: {
          format: "int",
          minimum: 1,
          type: "integer",
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,min=1",
        },
        // @ts-ignore
        "x-go-name": "ID",
      },
      BotActiveQuery: {
        description: "Фильтрует ботов по статусу активности",
        in: "query",
        name: "active",
        schema: {
          $ref: "#/components/schemas/Boolean",
        },
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,enum-valid",
        },
      },
      BotRoleQuery: {
        description: "Фильтрует ботов по одной или нескольким назначенным ролям",
        in: "query",
        name: "role",
        schema: {
          $ref: "#/components/schemas/Roles",
        },
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,enum-valid",
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      SinceQuery: {
        description: "Нижняя граница даты последнего обновления объекта",
        in: "query",
        name: "since",
        schema: {
          format: "date-time",
          type: "string",
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      UntilQuery: {
        description: "Верхняя граница даты последнего обновления объекта",
        in: "query",
        name: "until",
        schema: {
          format: "date-time",
          type: "string",
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      SinceIDQuery: {
        description: "Нижняя граница идентификаторов объектов",
        in: "query",
        name: "since_id",
        schema: {
          type: "integer",
          format: "int64",
          minimum: 1,
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
        // @ts-ignore
        "x-go-name": "SinceID",
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,min=1",
        },
      },
      UntilIDQuery: {
        description: "Верхняя граница идентификаторов объектов",
        in: "query",
        name: "until_id",
        schema: {
          type: "integer",
          format: "int64",
          minimum: 1,
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
        // @ts-ignore
        "x-go-name": "UntilID",
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,min=1",
        },
      },
      LimitQuery: {
        description: "Количество элементов в ответе (по умолчанию 100)",
        in: "query",
        name: "limit",
        schema: {
          format: "int",
          maximum: 1000,
          minimum: 1,
          type: "integer",
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,min=1,max=1000",
        },
      },
      ChannelActiveQuery: {
        description: "Фильтрует каналы по статусу активности",
        in: "query",
        name: "active",
        schema: {
          $ref: "#/components/schemas/Boolean",
        },
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,enum-valid",
        },
      },
      ChannelTypeQuery: {
        description: "Фильтрует каналы по указанным типам",
        in: "query",
        name: "types",
        schema: {
          items: {
            $ref: "#/components/schemas/ChannelType",
          },
          type: "array",
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,enum-valid",
        },
      },
      CommandNamePath: {
        description: "Уникальный идентификатор команды бота для ссылки на конкретную команду",
        in: "path",
        name: "command_name",
        required: true,
        schema: {
          type: "string",
          maxLength: 32,
        },
      },
      DialogIdPath: {
        description: "Уникальный идентификатор диалога",
        in: "path",
        name: "dialog_id",
        required: true,
        schema: {
          type: "integer",
          format: "int64",
          example: 1,
        },
      },
      ChatIdPath: {
        description: "Уникальный идентификатор чата",
        in: "path",
        name: "chat_id",
        required: true,
        schema: {
          type: "integer",
          format: "int64",
          example: 1,
        },
      },
      FileIdPath: {
        description: "Идентификатор файла",
        in: "path",
        name: "id",
        required: true,
        schema: {
          type: "string",
          format: "uuid",
          example: "e33e5398-814a-47d6-902a-466ba120ce45",
        },
      },
      MessageIdPath: {
        description: "ID сообщения",
        in: "path",
        name: "message_id",
        required: true,
        schema: {
          type: "integer",
          format: "int64",
          minimum: 1,
          example: 100,
        },
      },
    },
    requestBodies: {
      UpdateBotRequest: {
        description: "Запрос на обновление бота",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  description: "Имя бота",
                  example: "Demo bot",
                  type: "string",
                  maxLength: 255,
                  // @ts-ignore
                  "x-go-type-skip-optional-pointer": true,
                  // @ts-ignore
                  "x-omitempty": false,
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "omitempty,min=0,max=255",
                  },
                },
                avatar_url: {
                  description: "URL аватара бота",
                  example: "https://avatar.demo/demo-avatar",
                  type: "string",
                  format: "uri",
                  // @ts-ignore
                  "x-omitempty": false,
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "omitempty,url",
                  },
                },
                roles: {
                  $ref: "#/components/schemas/Roles",
                },
              },
            },
          },
        },
      },
      CreateOrUpdateCommandRequest: {
        description: "Тело запроса для создания/обновления команды бота",
        content: {
          "application/json": {
            schema: {
              oneOf: [
                {
                  $ref: "#/components/schemas/CreateCommandRequestBody",
                },
                {
                  $ref: "#/components/schemas/UpdateCommandRequestBody",
                },
              ],
            },
          },
        },
      },
      DialogResponsibleRequest: {
        description: "Запрос на назначение ответственного пользователя и бота для диалога",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                bot_id: {
                  type: "integer",
                  format: "int64",
                  example: 1,
                  // @ts-ignore
                  "x-go-type-skip-optional-pointer": true,
                  // @ts-ignore
                  "x-omitempty": false,
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "omitempty,min=1",
                  },
                  // @ts-ignore
                  "x-go-name": "BotID",
                  description: "Уникальный идентификатор бота, назначенного для диалога",
                },
                user_id: {
                  type: "integer",
                  format: "int64",
                  example: 1,
                  // @ts-ignore
                  "x-go-type-skip-optional-pointer": true,
                  // @ts-ignore
                  "x-omitempty": false,
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "omitempty,min=1",
                  },
                  // @ts-ignore
                  "x-go-name": "UserID",
                  description: "Уникальный идентификатор пользователя для назначения ответственным",
                },
              },
            },
          },
        },
      },
      DialogAddTagsRequest: {
        description: "Запрос на добавление тегов к диалогу",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["tags"],
              properties: {
                tags: {
                  type: "array",
                  minLength: 1,
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "required,min=1,dive",
                  },
                  description: "Список тегов для добавления",
                  items: {
                    type: "object",
                    required: ["name"],
                    properties: {
                      color_code: {
                        allOf: [
                          {
                            $ref: "#/components/schemas/ColorCode",
                          },
                        ],
                        // @ts-ignore
                        "x-oapi-codegen-extra-tags": {
                          binding: "omitempty,enum-valid",
                        },
                        description: "Необязательный цветовой код тега",
                      },
                      name: {
                        type: "string",
                        minLength: 1,
                        maxLength: 255,
                        // @ts-ignore
                        "x-oapi-codegen-extra-tags": {
                          binding: "required,min=1,max=255",
                        },
                        description: "Имя тега",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      DialogDeleteTagsRequest: {
        description: "Запрос на удаление тегов из диалога",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["tags"],
              properties: {
                tags: {
                  type: "array",
                  minLength: 1,
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "required,min=1,dive",
                  },
                  items: {
                    type: "object",
                    required: ["name"],
                    properties: {
                      name: {
                        type: "string",
                        minLength: 1,
                        maxLength: 255,
                        // @ts-ignore
                        "x-oapi-codegen-extra-tags": {
                          binding: "required,min=1,max=255",
                        },
                        description: "Имя тега для удаления",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      CreateDialogRequest: {
        description: "Запрос на создание нового диалога",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                bot_id: {
                  type: "integer",
                  format: "int64",
                  minimum: 1,
                  example: 32,
                  nullable: true,
                  // @ts-ignore
                  "x-go-name": "BotID",
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "omitempty,min=1",
                  },
                  description: "ID бота, который будет связан с диалогом",
                },
                user_id: {
                  type: "integer",
                  format: "int64",
                  minimum: 1,
                  example: 43,
                  nullable: true,
                  // @ts-ignore
                  "x-go-name": "UserID",
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "omitempty,min=1",
                  },
                  description: "ID пользователя, начавшего диалог",
                },
              },
            },
          },
        },
      },
      UploadFileByUrlRequest: {
        description: "Тело запроса для загрузки файла по удалённому URL",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["url"],
              properties: {
                url: {
                  type: "string",
                  format: "uri",
                  description: "URL файла для скачивания и загрузки",
                  example: "https://file.demo/demo-file",
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "web_url",
                  },
                },
              },
            },
          },
        },
      },
      UpdateFileMetadataRequest: {
        description: "Тело запроса для обновления метаданных файла",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["transcription"],
              properties: {
                transcription: {
                  type: "string",
                  description: "Обновлённая транскрипция, связанная с файлом",
                  example: "Example updated transcription",
                },
                transcription_status: {
                  $ref: "#/components/schemas/FileTranscriptionStatus",
                },
              },
            },
          },
        },
      },
      SendMessageRequest: {
        description: "Тело запроса для отправки нового сообщения",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/SendMessageRequestBody",
            },
          },
        },
      },
      EditMessageRequest: {
        description: "Тело запроса для редактирования существующего сообщения",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description:
                "Представляет полезную нагрузку сообщения, включая содержимое, вложения и связанные метаданные в зависимости от типа сообщения",
              properties: {
                content: {
                  type: "string",
                  description:
                    "Текстовое содержимое сообщения (обязательно только для текстовых сообщений)",
                  example: "Hello!",
                  maxLength: 2000,
                },
                items: {
                  type: "array",
                  description:
                    "Файловые вложения (обязательно для сообщений типа file, audio и image)",
                  items: {
                    type: "object",
                    description: "Файловое вложение",
                    required: ["id"],
                    properties: {
                      caption: {
                        type: "string",
                        description: "Подпись к файлу",
                        example: "demo caption",
                        // @ts-ignore
                        "x-oapi-codegen-extra-tags": {
                          binding: "min=1,max=1024",
                        },
                      },
                      id: {
                        type: "string",
                        format: "uuid",
                        description: "Уникальный идентификатор файла",
                        example: "e33e5398-814a-47d6-902a-466ba120ce45",
                        // @ts-ignore
                        "x-go-name": "ID",
                      },
                    },
                  },
                },
                note: {
                  type: "string",
                  description:
                    "Примечание или описание файла (требуется для сообщений с файлами, аудио и изображениями)",
                  example: "demo note",
                },
                order: {
                  description: "Данные заказа (обязательно для сообщений типа order)",
                  allOf: [
                    {
                      $ref: "#/components/schemas/MessageOrder",
                    },
                  ],
                },
                product: {
                  description: "Данные продукта (обязательно для сообщений типа product)",
                  allOf: [
                    {
                      $ref: "#/components/schemas/MessageProduct",
                    },
                  ],
                },
                quote_message_id: {
                  type: "integer",
                  format: "int64",
                  description: "ID цитируемого сообщения (только для текстовых сообщений)",
                  example: 42,
                  // @ts-ignore
                  "x-go-type-skip-optional-pointer": true,
                },
              },
            },
          },
        },
      },
    },
    responses: {
      EmptyResponse: {
        description: "Успешное выполнение",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {},
            },
          },
        },
      },
      ErrorResponse: {
        description: "Ответ с ошибкой",
        content: {
          "application/json": {
            schema: {
              properties: {
                errors: {
                  description: "Список ошибок",
                  items: {
                    type: "string",
                  },
                  type: "array",
                },
              },
              type: "object",
            },
          },
        },
      },
      BotsListResponse: {
        description: "Список каналов",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Bot",
              },
              // @ts-ignore
              "x-go-type-skip-optional-pointer": true,
            },
          },
        },
      },
      ChannelsListResponse: {
        description: "Массив объектов каналов",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ChannelListResponseItem",
              },
              // @ts-ignore
              "x-go-type-skip-optional-pointer": true,
            },
          },
        },
      },
      ChatsListResponse: {
        description: "Массив объектов «чат»",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ChatsListResponseItem",
              },
              // @ts-ignore
              "x-go-type-skip-optional-pointer": true,
            },
          },
        },
      },
      CommandsResponse: {
        description: "Список команд",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Command",
              },
              // @ts-ignore
              "x-go-type-skip-optional-pointer": true,
            },
          },
        },
      },
      CommandCreateResponse: {
        description: "Ответ после создания команды",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CommandCreate",
            },
          },
        },
      },
      CustomersListResponse: {
        description: "Список клиентов",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Customer",
              },
              // @ts-ignore
              "x-go-type-skip-optional-pointer": true,
            },
          },
        },
      },
      DialogsListResponse: {
        description: "Список диалогов",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/DialogListResponseItem",
              },
              // @ts-ignore
              "x-go-type-skip-optional-pointer": true,
            },
          },
        },
      },
      DialogAssignResponse: {
        description: "Результат операции назначения диалога",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["responsible", "is_reassign"],
              properties: {
                is_reassign: {
                  type: "boolean",
                  nullable: false,
                  example: true,
                  description: "Показывает, является ли назначение переназначением",
                  // @ts-ignore
                  "x-go-name": "IsReAssign",
                },
                left_user_id: {
                  type: "integer",
                  format: "int64",
                  nullable: true,
                  description: "ID пользователя, покинувшего диалог (если применимо)",
                  // @ts-ignore
                  "x-go-name": "LeftUserID",
                },
                previous_responsible: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/Responsible",
                    },
                  ],
                  nullable: true,
                  description: "Предыдущий ответственный пользователь до переназначения",
                },
                responsible: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/Responsible",
                    },
                  ],
                  nullable: false,
                  description: "Текущий ответственный пользователь диалога",
                  // @ts-ignore
                  "x-go-type-skip-optional-pointer": true,
                },
              },
            },
          },
        },
      },
      DialogUnassignResponse: {
        description: "Результат операции отмены назначения диалога",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                previous_responsible: {
                  allOf: [
                    {
                      $ref: "#/components/schemas/Responsible",
                    },
                  ],
                  nullable: true,
                  // @ts-ignore
                  "x-omitempty": true,
                  description: "Предыдущий ответственный пользователь до снятия назначения",
                },
              },
            },
          },
        },
      },
      CreateDialogResponse: {
        description: "Результат создания диалога",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["id", "created_at"],
              properties: {
                created_at: {
                  description: "Дата и время в формате RFC 3339 с микросекундами",
                  example: "2006-01-02T15:04:05.999999Z07:00",
                  type: "string",
                  format: "date-time",
                  // @ts-ignore
                  "x-go-type": "DateTimeRFC3339Micro",
                },
                id: {
                  type: "integer",
                  format: "int64",
                  example: 1,
                  // @ts-ignore
                  "x-go-name": "ID",
                  description: "Уникальный идентификатор созданного диалога",
                },
              },
            },
          },
        },
      },
      FullFileResponse: {
        description:
          "Успешный ответ, содержащий полную информацию о файле, включая URL для скачивания",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/FileWithUrl",
            },
          },
        },
      },
      UploadResponse: {
        description: "Успешный ответ с метаданными загруженного файла",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/File",
            },
          },
        },
      },
      ChatMemberListResponse: {
        description: "Список участников чата с их состояниями и атрибутами",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ChatMemberListResponseItem",
              },
            },
          },
        },
      },
      UserListResponse: {
        description: "Список пользователей с данными профиля",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/UserListResponseItem",
              },
            },
          },
        },
      },
      MessageListResponse: {
        description: "Список сообщений",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/MessageListResponseItem",
              },
            },
          },
        },
      },
      SendMessageResponse: {
        description: "Список сообщений",
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["message_id", "time"],
              properties: {
                message_id: {
                  type: "integer",
                  format: "int64",
                  example: 1,
                  // @ts-ignore
                  "x-go-name": "MessageId",
                },
                time: {
                  type: "string",
                  format: "date-time",
                  example: "2006-01-02T15:04:05.999999Z07:00",
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    time_format: "2006-01-02T15:04:05.999999Z07:00",
                  },
                },
              },
            },
          },
        },
      },
    },
    schemas: {
      Boolean: {
        description: "Логический тип",
        type: "string",
        enum: ["1", "0", "true", "false"],
        // @ts-ignore
        "x-enumNames": ["One", "Zero", true, false],
      },
      Roles: {
        description: "Массив типов ролей бота",
        type: "array",
        items: {
          $ref: "#/components/schemas/Role",
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "omitempty,enum-valid",
        },
      },
      Role: {
        description: "Тип роли бота",
        type: "string",
        enum: ["responsible", "distributor", "hidden"],
        // @ts-ignore
        "x-enumNames": ["BotRoleResponsible", "BotRoleDistributor", "BotRoleHidden"],
        example: "responsible",
      },
      Bot: {
        description: "Информация о боте",
        type: "object",
        required: [
          "id",
          "name",
          "client_id",
          "roles",
          "created_at",
          "is_active",
          "is_self",
          "is_system",
        ],
        properties: {
          avatar_url: {
            type: "string",
            format: "uri",
            example: "https://avatar.demo/avatar-url",
            description: "Публичный URL аватара бота",
          },
          client_id: {
            type: "string",
            example: "demo-bot-id",
            description: "Уникальный внешний идентификатор клиента бота",
          },
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          deactivated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Внутренний уникальный идентификатор бота",
            // @ts-ignore
            "x-go-name": "ID",
          },
          is_active: {
            type: "boolean",
            example: true,
            description: "Показывает, активен ли бот",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          is_self: {
            type: "boolean",
            example: true,
            description: "Показывает, является ли этот бот текущим аутентифицированным",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          is_system: {
            type: "boolean",
            example: false,
            description: "Показывает, является ли бот системным",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          name: {
            type: "string",
            example: "demo-bot",
            description: "Читаемое имя бота",
          },
          roles: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Role",
            },
            description: "Список ролей, назначенных боту",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
        },
      },
      ChannelType: {
        description: "Тип канала, используемого для общения",
        type: "string",
        enum: [
          "telegram",
          "fbmessenger",
          "viber",
          "whatsapp",
          "skype",
          "vk",
          "instagram",
          "consultant",
          "yandex_chat",
          "odnoklassniki",
          "max",
          "ozon",
          "wildberries",
          "yandex_market",
          "mega_market",
          "avito",
          "drom",
          "youla",
          "custom",
        ],
        example: "telegram",
      },
      ChannelListResponseItem: {
        description: "Канал связи, используемый ботом",
        type: "object",
        required: ["id", "type", "created_at", "activated_at", "is_active", "settings"],
        properties: {
          activated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          deactivated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Уникальный идентификатор канала",
            // @ts-ignore
            "x-go-name": "ID",
          },
          is_active: {
            type: "boolean",
            example: true,
            description: "Показывает, активен ли канал",
          },
          name: {
            type: "string",
            example: "Example Channel",
            nullable: true,
            description: "Необязательное читаемое имя канала",
          },
          settings: {
            allOf: [
              {
                $ref: "#/components/schemas/ChannelSettings",
              },
            ],
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            description: "Конфигурационные настройки, специфичные для типа канала",
          },
          type: {
            allOf: [
              {
                $ref: "#/components/schemas/ChannelType",
              },
            ],
            description: "Тип канала связи",
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
        },
      },
      ChannelSettings: {
        description: "Настройки и возможности конкретного канала связи",
        type: "object",
        properties: {
          text: {
            $ref: "#/components/schemas/TextMessageSetting",
          },
          audio: {
            $ref: "#/components/schemas/AudioMessageSetting",
          },
          file: {
            $ref: "#/components/schemas/FileMessageSetting",
          },
          image: {
            $ref: "#/components/schemas/ImageMessageSetting",
          },
          order: {
            $ref: "#/components/schemas/OrderMessageSetting",
          },
          product: {
            $ref: "#/components/schemas/ProductMessageSetting",
          },
          customer_external_id: {
            $ref: "#/components/schemas/CustomerExternalId",
          },
          sending_policy: {
            $ref: "#/components/schemas/SendingPolicy",
          },
          status: {
            $ref: "#/components/schemas/StatusSetting",
          },
          suggestions: {
            $ref: "#/components/schemas/Suggestions",
          },
          template: {
            $ref: "#/components/schemas/TemplateSetting",
          },
          whatsapp: {
            $ref: "#/components/schemas/WAChannelProperties",
          },
          reactions: {
            $ref: "#/components/schemas/Reactions",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      AudioMessageSetting: {
        description: "Настройки поддержки аудио сообщений в канале",
        type: "object",
        properties: {
          creating: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          deleting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          quoting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          reaction: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          max_item_size: {
            description: "Максимальный размер аудио‑файла (байт)",
            format: "int64",
            type: "integer",
          },
          max_items_count: {
            description: "Максимальное число аудио‑вложений в сообщении",
            format: "int",
            type: "integer",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      FileMessageSetting: {
        description: "Поддержка сообщений с файлами",
        type: "object",
        properties: {
          creating: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          deleting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          editing: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          quoting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          reaction: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          max_item_size: {
            description: "Максимальный размер файла для отправки",
            format: "int64",
            type: "integer",
          },
          max_items_count: {
            description: "Максимальное число файловых вложений в сообщении",
            format: "int",
            type: "integer",
          },
          note_max_chars_count: {
            description: "Максимальное количество символов в аннотации к файловому сообщению",
            format: "uint16",
            type: "integer",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      ImageMessageSetting: {
        description: "Поддержка медиа‑сообщений",
        type: "object",
        properties: {
          creating: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          deleting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          editing: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          quoting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          reaction: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          max_item_size: {
            description: "Максимальный размер изображения для отправки",
            format: "int64",
            type: "integer",
          },
          max_items_count: {
            description: "Максимальное количество медиа-вложений в сообщении",
            format: "int",
            type: "integer",
          },
          note_max_chars_count: {
            description: "Максимум символов в аннотации медиа‑сообщения",
            format: "uint16",
            type: "integer",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      TextMessageSetting: {
        description: "Поддержка текстовых сообщений",
        type: "object",
        properties: {
          creating: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          deleting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          editing: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          quoting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          reaction: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          max_chars_count: {
            description: "Максимальное число символов в текстовом сообщении",
            format: "uint16",
            type: "integer",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      OrderMessageSetting: {
        description: "Поддержка сообщений о заказах",
        type: "object",
        properties: {
          creating: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          deleting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          editing: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          reaction: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          quoting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      ProductMessageSetting: {
        description: "Поддержка сообщений о продукте",
        type: "object",
        properties: {
          creating: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          deleting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          editing: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          reaction: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          quoting: {
            $ref: "#/components/schemas/ChannelFeature",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      ChannelFeature: {
        description: "Поддержка операций с сообщениями указанного типа",
        type: "string",
        enum: ["none", "receive", "send", "both"],
        example: "both",
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      CustomerExternalId: {
        description: "Поддержка внешних идентификаторов клиентов",
        type: "string",
        enum: ["any", "phone"],
        example: "phone",
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      SendingPolicyAfterReplyTimeout: {
        description: "Типы сообщений, отправляемых после истечения времени ответа",
        type: "string",
        enum: ["no", "template"],
        example: "no",
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      SendingPolicyNewCustomer: {
        description: "Типы сообщений для отправки новому клиенту",
        type: "string",
        enum: ["no", "template", "text"],
        example: "no",
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      SendingPolicyOutgoing: {
        description: "Поддержка исходящих сообщений",
        type: "string",
        enum: ["allowed", "restricted"],
        example: "allowed",
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      SendingPolicy: {
        description: "Политика отправки сообщений",
        type: "object",
        properties: {
          after_reply_timeout: {
            $ref: "#/components/schemas/SendingPolicyAfterReplyTimeout",
          },
          new_customer: {
            $ref: "#/components/schemas/SendingPolicyNewCustomer",
          },
          outgoing: {
            $ref: "#/components/schemas/SendingPolicyOutgoing",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      StatusSetting: {
        description: "Передача информации о статусе сообщения",
        type: "object",
        properties: {
          delivered: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          read: {
            $ref: "#/components/schemas/ChannelFeature",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      Suggestions: {
        description: "Поддержка типов быстрых ответов",
        type: "object",
        properties: {
          email: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          phone: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          text: {
            $ref: "#/components/schemas/ChannelFeature",
          },
          url: {
            $ref: "#/components/schemas/ChannelFeature",
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      TemplateSetting: {
        description: "Поддержка шаблонов сообщений",
        type: "object",
        properties: {
          creation: {
            description: "Поддержка создания шаблонов в системе",
            example: true,
            type: "boolean",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      WAChannelQuality: {
        description: "Качество канала WhatsApp",
        type: "string",
        enum: ["high", "medium", "low"],
        example: "high",
      },
      WAChannelStatus: {
        description: "Статус канала WhatsApp",
        type: "string",
        enum: ["connected", "flagged", "offline", "pending", "restricted"],
        example: "connected",
      },
      WAChannelProperties: {
        description: "Свойства канала WhatsApp",
        type: "object",
        properties: {
          channel_quality: {
            allOf: [
              {
                $ref: "#/components/schemas/WAChannelQuality",
              },
            ],
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          channel_status: {
            allOf: [
              {
                $ref: "#/components/schemas/WAChannelStatus",
              },
            ],
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,enum-valid",
            },
          },
          tier: {
            format: "int",
            type: "integer",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=0",
            },
          },
        },
      },
      Reactions: {
        description: "Поддержка работы с реакциями на сообщения",
        type: "object",
        properties: {
          dictionary: {
            description: "Словарь доступных реакций",
            type: "array",
            items: {
              type: "string",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          max_count: {
            description: "Максимальное число реакций, добавляемых системой",
            format: "int64",
            type: "integer",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
        },
        // @ts-ignore
        "x-go-type-skip-optional-pointer": true,
      },
      ChatsListResponseItem: {
        description: "Представляет чат с дополнительными метаданными (дата создания, обновления)",
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/Chat",
          },
          {
            $ref: "#/components/schemas/ChatTimestamps",
          },
        ],
      },
      ChatTimestamps: {
        description: "Представляет даты и время создания и последнего обновления чата",
        type: "object",
        properties: {
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
        },
      },
      Chat: {
        description:
          "Представляет цепочку общения между пользователями и/или клиентом в определённом канале",
        type: "object",
        required: ["id"],
        properties: {
          author_id: {
            type: "integer",
            format: "int64",
            example: 100,
            description: "ID пользователя, инициировавшего чат",
            // @ts-ignore
            "x-go-name": "AuthorID",
          },
          avatar: {
            type: "string",
            example: "https://avatar.demo/chat-avatar",
            description: "URL аватара чата",
          },
          channel: {
            allOf: [
              {
                $ref: "#/components/schemas/Channel",
              },
            ],
            nullable: true,
            // @ts-ignore
            "x-omitempty": true,
            description: "Канал связи (например, Telegram, Viber), связанный с чатом",
          },
          customer: {
            allOf: [
              {
                $ref: "#/components/schemas/Actor",
              },
            ],
            nullable: true,
            description: "Клиент, участвующий в чате (если есть)",
          },
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Уникальный идентификатор чата",
            // @ts-ignore
            "x-go-name": "ID",
          },
          last_activity: {
            description: "Дата и время в формате RFC 3339",
            example: "2006-01-02T15:04:05Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
          last_dialog: {
            allOf: [
              {
                $ref: "#/components/schemas/Dialog",
              },
            ],
            description: "Последний диалог в чате",
          },
          last_message: {
            allOf: [
              {
                $ref: "#/components/schemas/Message",
              },
            ],
            nullable: true,
            // @ts-ignore
            "x-omitempty": true,
            description: "Последнее сообщение в чате (включая системные/служебные)",
          },
          last_user_message: {
            allOf: [
              {
                $ref: "#/components/schemas/LastUserMessage",
              },
            ],
            nullable: true,
            // @ts-ignore
            "x-omitempty": true,
            description: "Последнее пользовательское сообщение в чате",
          },
          members: {
            allOf: [
              {
                $ref: "#/components/schemas/Members",
              },
            ],
            description: "Список участников чата",
          },
          name: {
            type: "string",
            example: "Example Chat",
            description: "Отображаемое имя чата",
          },
          not_read_messages: {
            type: "integer",
            format: "int64",
            example: 12,
            description: "Количество непрочитанных сообщений в чате",
            // @ts-ignore
            "x-go-name": "NotReadMessagesCount",
            // @ts-ignore
            "x-omitempty": true,
          },
          reply_deadline: {
            description: "Дата и время в формате RFC 3339",
            example: "2006-01-02T15:04:05Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
          unread: {
            type: "boolean",
            example: true,
            description: "Показывает, есть ли у пользователей непрочитанные сообщения в чате",
            // @ts-ignore
            "x-omitempty": true,
          },
          waiting_level: {
            type: "string",
            enum: ["warning", "danger", "none"],
            nullable: true,
            description:
              "Текущий уровень срочности чата на основе бизнес‑логики (например, нарушения SLA)",
            // @ts-ignore
            "x-omitempty": true,
          },
          waiting_level_transition_time: {
            description: "Дата и время в формате RFC 3339",
            example: "2006-01-02T15:04:05Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-omitempty": true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
        },
      },
      Members: {
        description: "Список участников чата",
        type: "array",
        items: {
          type: "object",
          allOf: [
            {
              $ref: "#/components/schemas/Member",
            },
          ],
        },
      },
      Member: {
        description: "Участник чата, представляющий пользователя и его статус",
        type: "object",
        required: ["is_author", "state", "user"],
        properties: {
          is_author: {
            type: "boolean",
            example: true,
            nullable: false,
            description: "Показывает, является ли участник автором (создателем) чата",
          },
          state: {
            type: "string",
            enum: ["active", "kicked", "leaved", "undefined"],
            example: "active",
            nullable: false,
            description: "Текущее состояние участника в чате",
          },
          user: {
            allOf: [
              {
                $ref: "#/components/schemas/Actor",
              },
            ],
            description: "Информация о пользователе — участнике чата",
          },
        },
      },
      LastUserMessage: {
        description: "Последнее пользовательское сообщение в чате",
        type: "object",
        nullable: true,
        required: ["id"],
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Уникальный идентификатор последнего пользовательского сообщения",
            // @ts-ignore
            "x-go-name": "ID",
          },
        },
      },
      Actor: {
        description: "Участник чата",
        type: "object",
        properties: {
          id: {
            description: "Идентификатор пользователя",
            example: 56,
            format: "int64",
            type: "integer",
            // @ts-ignore
            "x-go-name": "ID",
          },
          available: {
            description: "Индикатор статуса пользователя (только для типа «user»)",
            example: false,
            type: "boolean",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          avatar: {
            description: "Аватар пользователя",
            example: "https://avatar.demo/demo-avatar",
            format: "uri",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          email: {
            description: "Электронная почта пользователя (только тип «customer»)",
            example: "demo@user.demo",
            format: "email",
            type: "string",
            // @ts-ignore
            "x-go-type": "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          external_id: {
            description: "Внешний идентификатор пользователя",
            example: "eid3459",
            type: "string",
            // @ts-ignore
            "x-go-name": "ExternalID",
          },
          first_name: {
            description: "Имя пользователя (только для типов customer и user)",
            example: "John",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          is_blocked: {
            description: "Индикатор блокировки пользователя (только тип «customer»)",
            example: false,
            type: "boolean",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          is_system: {
            description: "Индикатор системного пользователя (только для типа bot)",
            example: true,
            type: "boolean",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          is_technical_account: {
            description: "Индикатор технической учётной записи (только для пользователя типа user)",
            example: false,
            type: "boolean",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          last_name: {
            description: "Фамилия пользователя (только для типов «customer» и «user»)",
            example: "Doe",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          name: {
            description: "Никнейм пользователя",
            example: "John D.",
            type: "string",
          },
          phone: {
            description: "Телефонный номер пользователя",
            example: "541-392-2618",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          type: {
            type: "string",
            enum: ["user", "bot", "customer", "channel"],
            nullable: false,
            example: "user",
          },
          username: {
            description: "Имя пользователя (только для типа «customer»)",
            example: "john_doe",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
        },
        required: ["id", "external_id", "type", "name"],
      },
      Message: {
        description: "Объект, представляющий одно чат‑сообщение",
        type: "object",
        required: ["chat_id", "id", "is_edit", "is_read", "scope", "status", "time", "type"],
        properties: {
          action: {
            allOf: [
              {
                $ref: "#/components/schemas/SystemAction",
              },
            ],
            description: "Системное действие, отображаемое сообщением",
            nullable: true,
          },
          actions: {
            type: "array",
            description: "Список интерактивных действий, связанных с сообщением",
            items: {
              $ref: "#/components/schemas/MessageAction",
            },
          },
          chat_id: {
            type: "integer",
            format: "int64",
            description: "ID чата, к которому относится это сообщение",
            example: 1,
            // @ts-ignore
            "x-go-name": "ChatID",
          },
          content: {
            type: "string",
            description: "Текстовое содержимое сообщения",
            example: "Hi there!",
            nullable: true,
          },
          dialog: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageDialog",
              },
            ],
            description: "Необязательный диалог, связанный с сообщением",
            nullable: true,
          },
          error: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageError",
              },
            ],
            description: "Информация об ошибке, связанной с отправкой или обработкой сообщения",
            nullable: true,
          },
          from: {
            allOf: [
              {
                $ref: "#/components/schemas/Actor",
              },
            ],
            description: "Отправитель сообщения",
          },
          id: {
            type: "integer",
            format: "int64",
            description: "Уникальный идентификатор сообщения",
            example: 1,
            // @ts-ignore
            "x-go-name": "ID",
          },
          is_edit: {
            type: "boolean",
            description: "Показывает, редактировалось ли сообщение",
            example: true,
          },
          is_read: {
            type: "boolean",
            description: "Показывает, было ли сообщение прочитано",
            example: true,
          },
          items: {
            type: "array",
            description: "Список прикреплённых файлов",
            items: {
              $ref: "#/components/schemas/MessageFile",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          note: {
            type: "string",
            description: "Необязательное внутреннее примечание или комментарий к сообщению",
            example: "Nice cats",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            nullable: true,
          },
          order: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageOrder",
              },
            ],
            description: "Необязательные данные заказа, связанные с сообщением",
            nullable: true,
          },
          product: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageProduct",
              },
            ],
            description: "Необязательные данные о продукте, упомянутые в сообщении",
            nullable: true,
          },
          quote: {
            allOf: [
              {
                $ref: "#/components/schemas/QuoteMessage",
              },
            ],
            description: "Цитируемое сообщение (если это ответ)",
            nullable: true,
          },
          responsible: {
            allOf: [
              {
                $ref: "#/components/schemas/Actor",
              },
            ],
            description: "Пользователь, ответственный за это сообщение или задачу",
            nullable: true,
          },
          scope: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageScope",
              },
            ],
            description: "Область сообщения",
          },
          status: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageStatus",
              },
            ],
            description: "Текущий статус сообщения",
          },
          time: {
            type: "string",
            format: "date-time",
            description: "Метка времени создания сообщения",
            example: "2006-01-02T15:04:05Z07:00",
            nullable: false,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
          transport_attachments: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageTransportAttachments",
              },
            ],
            description: "Вложения, специфичные для транспортного уровня",
            nullable: true,
          },
          type: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageType",
              },
            ],
            description: "Тип сообщения",
          },
          user: {
            allOf: [
              {
                $ref: "#/components/schemas/Actor",
              },
            ],
            description: "Пользователь, связанный с сообщением",
            nullable: true,
          },
        },
      },
      MessageFile: {
        description: "Прикреплённый файл сообщения",
        type: "object",
        properties: {
          id: {
            description: "UUID вложенного файла",
            example: "c425d178-eb6f-11ec-8ea0-0242ac120002",
            format: "uuid",
            type: "string",
            // @ts-ignore
            "x-go-name": "ID",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          caption: {
            description: "Текстовое описание медиа‑вложения",
            example: "demo caption",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          duration: {
            description: "Длительность аудиозаписи (только для сообщений типа audio)",
            example: 345,
            format: "int",
            type: "integer",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          size: {
            description: "Размер вложения (в байтах)",
            example: 34534,
            format: "int",
            type: "integer",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          height: {
            description: "Высота изображения в пикселях (только для сообщений типа image)",
            example: 1080,
            format: "int",
            type: "integer",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          width: {
            description: "Ширина изображения в пикселях (только для сообщений типа image)",
            example: 1920,
            format: "int",
            type: "integer",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          histogram: {
            allOf: [
              {
                $ref: "#/components/schemas/Histogram",
              },
            ],
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          kind: {
            allOf: [
              {
                $ref: "#/components/schemas/FileType",
              },
            ],
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          preview_url: {
            description: "URL файла для загрузки",
            example: "https://url.demo/demo-url",
            format: "uri",
            type: "string",
            // @ts-ignore
            "x-go-name": "PreviewURL",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          transcription: {
            type: "string",
            description: "Транскрипция загруженного файла",
            example: "Sample transcription",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          type: {
            description: "Тип вложения",
            example: "application/pdf",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
        },
      },
      MessageType: {
        description: "Тип сообщения",
        type: "string",
        enum: ["text", "system", "command", "order", "product", "file", "image", "audio"],
        example: "text",
      },
      Histogram: {
        type: "array",
        description: "Звуковая диаграмма (только для аудио-сообщений)",
        example: [1, 34, 23, 4, 32, 34, 23, 12, 93, 4],
        items: {
          format: "int",
          type: "integer",
        },
      },
      FileType: {
        type: "string",
        description: "Тип файла",
        enum: ["none", "image", "video", "file", "audio"],
        example: "file",
      },
      MessageDialog: {
        description: "Диалог сообщений",
        type: "object",
        properties: {
          id: {
            description: "Идентификатор диалога",
            example: 9,
            format: "int64",
            type: "integer",
            // @ts-ignore
            "x-go-name": "ID",
          },
        },
        required: ["id"],
      },
      MessageError: {
        description: "Подробности ошибки сообщения (только для сообщений со статусом `failed`)",
        type: "object",
        properties: {
          code: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageErrorCode",
              },
            ],
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "enum-valid",
            },
          },
          message: {
            description: "Текстовое описание ошибки",
            example: "error malformed response",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
        },
        required: ["code"],
      },
      MessageErrorCode: {
        description: "Код ошибки сообщения",
        type: "string",
        enum: [
          "unknown",
          "network_error",
          "malformed_response",
          "async_send_timeout",
          "general",
          "customer_not_exists",
          "reply_timed_out",
          "spam_suspicion",
          "access_restricted",
        ],
        example: "malformed_response",
      },
      QuoteMessage: {
        description: "Цитируемое сообщение",
        type: "object",
        required: ["id", "time", "type"],
        properties: {
          id: {
            description: "Идентификатор цитируемого сообщения",
            example: 45,
            format: "int64",
            type: "integer",
            // @ts-ignore
            "x-go-name": "ID",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          content: {
            description: "Текст сообщения",
            example: "quote content",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          from: {
            $ref: "#/components/schemas/Actor",
          },
          items: {
            description: "Медиа‑вложения цитируемого сообщения",
            items: {
              $ref: "#/components/schemas/MessageFile",
            },
            type: "array",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          time: {
            type: "string",
            format: "date-time",
            description: "Время отправки сообщения",
            example: "2006-01-02T15:04:05Z07:00",
            nullable: false,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
          type: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageType",
              },
            ],
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "enum-valid",
            },
          },
        },
      },
      MessageTransportAttachments: {
        description: "Транспортные вложения",
        type: "object",
        properties: {
          suggestions: {
            description: "Быстрые ответы",
            items: {
              $ref: "#/components/schemas/Suggestion",
            },
            type: "array",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
        },
      },
      Suggestion: {
        description: "Предложение быстрого ответа",
        type: "object",
        properties: {
          payload: {
            description: "Payload быстрого ответа",
            example: "https://demo-payload.demo",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          title: {
            description: "Название быстрого ответа",
            example: "phone number",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          type: {
            allOf: [
              {
                $ref: "#/components/schemas/SuggestionType",
              },
            ],
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "enum-valid",
            },
          },
        },
      },
      SuggestionType: {
        type: "string",
        description: "Тип быстрого ответа",
        enum: ["text", "email", "phone", "url"],
        example: "phone",
      },
      MessageScope: {
        description: "Область сообщения",
        type: "string",
        enum: ["undefined", "public", "private"],
        example: "public",
      },
      MessageStatus: {
        type: "string",
        description: "Статус сообщения",
        enum: ["undefined", "received", "sending", "sent", "failed", "seen"],
        example: "seen",
      },
      MessageProduct: {
        description: "Описание продукта, упомянутого в сообщении",
        type: "object",
        properties: {
          id: {
            description: "Идентификатор продукта",
            example: 56,
            format: "uint64",
            type: "integer",
            // @ts-ignore
            "x-go-name": "ID",
          },
          article: {
            description: "Описание продукта",
            example: "324-DFT-495",
            maxLength: 128,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=128",
            },
          },
          cost: {
            $ref: "#/components/schemas/Cost",
          },
          img: {
            description: "URL изображения продукта",
            example: "https://image.demo/demo-image",
            format: "uri",
            maxLength: 2048,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=2048",
            },
          },
          name: {
            type: "string",
            description: "Название продукта",
            example: "demo product",
            maxLength: 255,
            minLength: 1,
            // @ts-ignore
            "x-omitempty": false,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "required,min=1,max=255",
            },
          },
          unit: {
            description: "Единицы измерения продукта",
            maxLength: 16,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-omitempty": false,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=16",
            },
          },
          url: {
            description: "URL продукта",
            example: "https://product.demo/demo-product",
            format: "uri",
            maxLength: 2048,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=2048",
            },
          },
        },
        required: ["id", "name"],
      },
      MessageOrder: {
        description: "Представляет детали заказа в сообщении",
        type: "object",
        properties: {
          external_id: {
            description: "Внешний идентификатор заказа",
            example: 56,
            format: "int64",
            type: "integer",
            // @ts-ignore
            "x-go-name": "ExternalID",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          cost: {
            $ref: "#/components/schemas/Cost",
          },
          date: {
            description: "Дата создания заказа",
            example: "2021-12-29T14:18:37.051393Z",
            format: "date-time",
            type: "string",
          },
          delivery: {
            $ref: "#/components/schemas/MessageOrderDelivery",
          },
          discount: {
            $ref: "#/components/schemas/Cost",
          },
          items: {
            description: "Массив элементов заказа",
            items: {
              $ref: "#/components/schemas/MessageOrderItem",
            },
            type: "array",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          number: {
            description: "Номер заказа",
            example: "23546",
            maxLength: 255,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=255",
            },
          },
          payments: {
            description: "Массив платежей",
            items: {
              $ref: "#/components/schemas/MessageOrderPayment",
            },
            type: "array",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          status: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageOrderStatus",
              },
            ],
          },
          url: {
            description: "URL заказа",
            example: "https://url.demo/demo-url",
            format: "uri",
            maxLength: 2048,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=2048",
            },
          },
        },
      },
      Cost: {
        description: "Денежная величина с указанием валюты",
        type: "object",
        properties: {
          currency: {
            description: "Код валюты",
            maxLength: 3,
            minLength: 3,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "required,currency",
            },
          },
          value: {
            description: "Числовое значение стоимости",
            example: 256,
            format: "double",
            minimum: 0,
            type: "number",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "gte=0",
            },
          },
        },
        required: ["currency", "value"],
      },
      MessageOrderDelivery: {
        description: "Информация о доставке заказа",
        type: "object",
        properties: {
          address: {
            description: "Адрес доставки",
            example: "2641 Webster St Berkeley, California(CA), 94705",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          comment: {
            description: "Комментарий к доставке",
            example: "demo delivery comment",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          name: {
            description: "Название метода доставки",
            example: "dhl",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          price: {
            $ref: "#/components/schemas/Cost",
          },
        },
      },
      MessageOrderItem: {
        description: "Товар заказа",
        type: "object",
        properties: {
          external_id: {
            description: "Внешний идентификатор продукта",
            example: 45,
            format: "int64",
            type: "integer",
            // @ts-ignore
            "x-go-name": "ExternalID",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          img: {
            description: "Изображение продукта",
            example: "https://order-image.demo/demo-order-image",
            format: "uri",
            maxLength: 2048,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=2048",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          name: {
            description: "Название продукта",
            example: "demo order item",
            maxLength: 255,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=255",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          price: {
            $ref: "#/components/schemas/Cost",
          },
          quantity: {
            allOf: [
              {
                $ref: "#/components/schemas/Quantity",
              },
            ],
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          url: {
            description: "URL продукта",
            example: "https://order-item.demo/demo-order-item",
            format: "uri",
            maxLength: 2048,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=2048",
            },
          },
        },
      },
      MessageOrderPayment: {
        description: "Информация об оплате заказа",
        type: "object",
        properties: {
          amount: {
            $ref: "#/components/schemas/Cost",
          },
          name: {
            description: "Название платежа",
            example: "paid",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          status: {
            $ref: "#/components/schemas/MessageOrderPaymentStatus",
          },
        },
      },
      MessageOrderPaymentStatus: {
        description: "Статус оплаты заказа",
        type: "object",
        properties: {
          name: {
            description: "Название платежа",
            example: "demo-payment-status",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          payed: {
            description: "Индикатор выполнения платежа",
            example: true,
            type: "boolean",
          },
        },
      },
      Quantity: {
        description: "Количество",
        type: "object",
        properties: {
          unit: {
            description: "Единицы измерения",
            example: "pcs",
            maxLength: 16,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=16",
            },
          },
          value: {
            description: "Количественное значение",
            example: 5,
            format: "double",
            minimum: 0,
            type: "number",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "gte=0",
            },
          },
        },
      },
      MessageOrderStatus: {
        description: "Статус заказа",
        properties: {
          code: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageOrderStatusCode",
              },
            ],
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "enum-valid",
            },
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          name: {
            description: "Название статуса",
            example: "approval",
            maxLength: 255,
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "max=255",
            },
          },
        },
      },
      MessageOrderStatusCode: {
        description: "Код статуса",
        type: "string",
        enum: ["new", "approval", "assembling", "delivery", "complete", "cancel"],
        example: "approval",
      },
      MessageAction: {
        description: "Определяет возможные действия, которые можно выполнить с сообщением",
        type: "string",
        enum: ["edit", "delete", "quote"],
        example: "edit",
      },
      Dialog: {
        description: "Объект диалога",
        type: "object",
        required: ["id", "created_at"],
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            // @ts-ignore
            "x-go-name": "ID",
          },
          created_at: {
            description: "Дата и время в формате RFC 3339",
            example: "2006-01-02T15:04:05Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
          closed_at: {
            description: "Дата и время в формате RFC 3339",
            example: "2006-01-02T15:04:05Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
          assigned_at: {
            type: "string",
            format: "date-time",
            nullable: true,
            example: "2006-01-02T15:04:05Z07:00",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339",
          },
          responsible: {
            allOf: [
              {
                $ref: "#/components/schemas/Actor",
              },
            ],
            nullable: true,
          },
          utm: {
            allOf: [
              {
                $ref: "#/components/schemas/Utm",
              },
            ],
            nullable: true,
          },
        },
      },
      Utm: {
        description: "UTM‑параметры для отслеживания маркетинговых кампаний",
        type: "object",
        properties: {
          campaign: {
            description: "Кампания",
            example: "spring_sale",
            maxLength: 255,
            minLength: 1,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1,max=255",
            },
          },
          content: {
            description: "Рекламный контент",
            example: "textlink",
            maxLength: 255,
            minLength: 1,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1,max=255",
            },
          },
          medium: {
            description: "Средство/носитель",
            example: "cpc",
            maxLength: 255,
            minLength: 1,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1,max=255",
            },
          },
          source: {
            description: "Источник",
            example: "Google",
            maxLength: 255,
            minLength: 1,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1,max=255",
            },
          },
          term: {
            description: "Ключевое слово",
            example: "running",
            maxLength: 255,
            minLength: 1,
            type: "string",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=1,max=255",
            },
          },
        },
      },
      SystemAction: {
        description: "Системное действие сообщения (только для сообщений типа system)",
        type: "string",
        enum: [
          "dialog_opened",
          "dialog_closed",
          "user_joined",
          "user_left",
          "dialog_assign",
          "customer_blocked",
          "customer_unblocked",
          "dialog_unassign",
        ],
        example: "user_joined",
      },
      Channel: {
        description: "Представляет канал связи, используемый ботом",
        type: "object",
        required: ["id", "avatar", "type", "transport_id", "settings", "is_active"],
        properties: {
          avatar: {
            type: "string",
            format: "uri",
            example: "https://avatar.demo/demo-avatar",
            description: "URI пользовательского аватара канала",
            nullable: false,
          },
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Уникальный идентификатор канала",
            // @ts-ignore
            "x-go-name": "ID",
          },
          is_active: {
            type: "boolean",
            example: true,
            description: "Показывает, активен ли канал",
          },
          name: {
            type: "string",
            example: "Example Channel",
            nullable: true,
            description: "Необязательное читаемое имя канала",
            // @ts-ignore
            "x-omitempty": true,
          },
          settings: {
            allOf: [
              {
                $ref: "#/components/schemas/ChannelSettings",
              },
            ],
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            description: "Конфигурационные настройки, специфичные для типа канала",
          },
          transport_id: {
            type: "integer",
            format: "int64",
            nullable: false,
            example: 12,
            // @ts-ignore
            "x-go-name": "TransportID",
            description: "Идентификатор базовой транспортной системы канала",
          },
          type: {
            allOf: [
              {
                $ref: "#/components/schemas/ChannelType",
              },
            ],
            description: "Тип канала связи",
          },
        },
      },
      Command: {
        type: "object",
        description: "Представляет одну команду бота с метаданными",
        required: ["created_at", "description", "id", "name"],
        properties: {
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          description: {
            type: "string",
            example: "demo-description",
            description: "Читаемое описание команды",
          },
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Уникальный идентификатор команды",
            // @ts-ignore
            "x-go-name": "ID",
          },
          name: {
            type: "string",
            example: "demo-name",
            description: "Уникальное имя команды, используемое для выполнения или идентификации",
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
        },
      },
      CommandCreate: {
        description: "Представляет созданную команду с метаданными",
        allOf: [
          {
            $ref: "#/components/schemas/Command",
          },
          {
            type: "object",
            properties: {
              created_at: {
                description: "Дата и время в формате RFC 3339",
                example: "2006-01-02T15:04:05Z07:00",
                type: "string",
                format: "date-time",
                // @ts-ignore
                "x-go-type": "DateTimeRFC3339",
              },
              updated_at: {
                description: "Дата и время в формате RFC 3339",
                example: "2006-01-02T15:04:05Z07:00",
                type: "string",
                format: "date-time",
                // @ts-ignore
                "x-go-type": "DateTimeRFC3339",
              },
            },
            required: ["created_at"],
          },
        ],
      },
      Customer: {
        description: "Объект диалога",
        type: "object",
        required: ["id", "created_at", "is_blocked"],
        properties: {
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            // @ts-ignore
            "x-go-name": "ID",
          },
          external_id: {
            type: "string",
            nullable: true,
            example: "e3456",
            // @ts-ignore
            "x-omitempty": true,
            // @ts-ignore
            "x-go-name": "ExternalID",
          },
          channel_id: {
            type: "integer",
            format: "int64",
            nullable: true,
            example: 5,
            // @ts-ignore
            "x-omitempty": true,
          },
          username: {
            type: "string",
            nullable: true,
            example: "demo_user",
            // @ts-ignore
            "x-omitempty": true,
          },
          first_name: {
            type: "string",
            nullable: true,
            example: "Thomas",
            // @ts-ignore
            "x-omitempty": true,
          },
          last_name: {
            type: "string",
            nullable: true,
            example: "Smith",
            // @ts-ignore
            "x-omitempty": true,
          },
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          revoked_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          avatar: {
            type: "string",
            nullable: true,
            example: "https://avatar.demo/demo-avatar",
            // @ts-ignore
            "x-omitempty": true,
          },
          profile_url: {
            type: "string",
            nullable: true,
            example: "https://profile.demo/demo-profile",
            // @ts-ignore
            "x-omitempty": true,
            // @ts-ignore
            "x-go-name": "ProfileURL",
          },
          country: {
            type: "string",
            nullable: true,
            example: "US",
            // @ts-ignore
            "x-omitempty": true,
          },
          language: {
            type: "string",
            nullable: true,
            example: "US",
            // @ts-ignore
            "x-omitempty": true,
          },
          phone: {
            type: "string",
            nullable: true,
            example: "928-970-2685",
            // @ts-ignore
            "x-omitempty": true,
          },
          email: {
            type: "string",
            nullable: true,
            example: "demo@customer.demo",
            // @ts-ignore
            "x-omitempty": true,
          },
          is_blocked: {
            type: "boolean",
            nullable: false,
            example: true,
          },
          utm: {
            allOf: [
              {
                $ref: "#/components/schemas/Utm",
              },
            ],
            nullable: true,
          },
        },
      },
      Responsible: {
        description: "Сущность, ответственная за диалог (пользователь или бот)",
        type: "object",
        required: ["id", "type"],
        properties: {
          assigned_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          external_id: {
            type: "string",
            nullable: true,
            description: "Внешний идентификатор ответственной сущности",
            // @ts-ignore
            "x-omitempty": true,
            // @ts-ignore
            "x-go-name": "ExternalID",
          },
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Уникальный идентификатор ответственной сущности",
            // @ts-ignore
            "x-go-name": "ID",
          },
          type: {
            type: "string",
            enum: ["user", "bot"],
            description: "Тип ответственной сущности",
          },
        },
      },
      Tag: {
        description: "Тег, назначенный диалогу или сущности",
        type: "object",
        required: ["name", "color_code"],
        properties: {
          color_code: {
            allOf: [
              {
                $ref: "#/components/schemas/ColorCode",
              },
            ],
            description: "Цветовой код, связанный с тегом",
          },
          name: {
            type: "string",
            example: "Important",
            description: "Имя тега",
          },
        },
      },
      ColorCode: {
        description: "Код цвета тега",
        type: "string",
        enum: [
          "light-red",
          "light-blue",
          "light-green",
          "light-orange",
          "light-gray",
          "light-grayish-blue",
          "red",
          "blue",
          "green",
          "orange",
          "gray",
          "grayish-blue",
        ],
        example: "grayish-blue",
      },
      DialogListResponseItem: {
        description: "Элемент диалога в ответе списка",
        type: "object",
        required: ["chat_id", "created_at", "id", "is_active", "is_assigned"],
        properties: {
          begin_message_id: {
            type: "integer",
            format: "int64",
            nullable: true,
            example: 32,
            description: "ID первого сообщения в диалоге",
            // @ts-ignore
            "x-go-name": "BeginMessageID",
          },
          bot_id: {
            type: "integer",
            format: "int64",
            nullable: true,
            example: 20,
            description: "ID бота, назначенного для диалога (если есть)",
            // @ts-ignore
            "x-go-name": "BotID",
          },
          chat_id: {
            type: "integer",
            format: "int64",
            example: 3,
            description: "ID чата, к которому принадлежит диалог",
            // @ts-ignore
            "x-go-name": "ChatID",
          },
          closed_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          ending_message_id: {
            type: "integer",
            format: "int64",
            nullable: true,
            example: 39,
            description: "ID последнего сообщения в диалоге",
            // @ts-ignore
            "x-go-name": "EndingMessageID",
          },
          id: {
            type: "integer",
            format: "int64",
            example: 1,
            description: "Уникальный идентификатор диалога",
            // @ts-ignore
            "x-go-name": "ID",
          },
          is_active: {
            type: "boolean",
            example: false,
            description: "Показывает, активен ли диалог",
          },
          is_assigned: {
            type: "boolean",
            example: true,
            description: "Показывает, назначен ли диалог кому‑нибудь",
          },
          responsible: {
            allOf: [
              {
                $ref: "#/components/schemas/Responsible",
              },
            ],
            description: "Текущая ответственная сущность диалога",
          },
          tags: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Tag",
            },
            description: "Список тегов, связанных с диалогом",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          utm: {
            allOf: [
              {
                $ref: "#/components/schemas/Utm",
              },
            ],
            description: "UTM‑параметры, связанные с диалогом",
          },
        },
      },
      FileWithUrl: {
        description: "Метаданные загруженного файла с временной ссылкой доступа",
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/File",
          },
          {
            type: "object",
            properties: {
              url: {
                description: "Прямой URL для скачивания или доступа к загруженному файлу",
                example: "https://file.demo/demo-file",
                type: "string",
                format: "uri",
                // @ts-ignore
                "x-omitempty": false,
                // @ts-ignore
                "x-go-type-skip-optional-pointer": true,
                // @ts-ignore
                "x-oapi-codegen-extra-tags": {
                  binding: "omitempty,Url",
                },
              },
            },
          },
        ],
      },
      File: {
        description: "Метаданные и статус обработки загруженного файла",
        type: "object",
        required: ["id", "type", "size"],
        properties: {
          id: {
            type: "string",
            format: "uuid",
            description: "Уникальный идентификатор файла",
            example: "e33e5398-814a-47d6-902a-466ba120ce45",
            // @ts-ignore
            "x-go-name": "ID",
          },
          size: {
            type: "integer",
            description: "Размер файла в байтах",
            example: 102384,
          },
          transcription: {
            type: "string",
            description: "Необязательная текстовая транскрипция содержимого файла, если применимо",
            example: "Demo transcription",
            nullable: true,
          },
          transcription_status: {
            allOf: [
              {
                $ref: "#/components/schemas/FileTranscriptionStatus",
              },
            ],
            description: "Статус транскрипции файла",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          type: {
            $ref: "#/components/schemas/FileType",
          },
        },
      },
      FileTranscriptionStatus: {
        type: "string",
        description: "Текущий статус транскрипции файла",
        enum: ["in_progress", "ready", "error"],
        example: "ready",
        // @ts-ignore
        "x-oapi-codegen-extra-tags": {
          binding: "oneof=in_progress ready error",
        },
      },
      ChatMemberListResponseItem: {
        type: "object",
        description:
          "Объект участника чата с ID пользователя, ID чата, состоянием членства и временными метками",
        required: ["chat_id", "created_at", "id", "is_author", "state", "user_id"],
        properties: {
          chat_id: {
            type: "integer",
            format: "int64",
            description: "ID чата, участником которого является пользователь",
            example: 123,
            // @ts-ignore
            "x-go-name": "ChatID",
          },
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          id: {
            type: "integer",
            format: "int64",
            description: "Уникальный ID записи о членстве в чате",
            example: 123,
            // @ts-ignore
            "x-go-name": "ID",
          },
          is_author: {
            type: "boolean",
            description: "Показывает, является ли пользователь автором чата",
            example: false,
            // @ts-ignore
            "x-go-name": "IsAuthor",
          },
          state: {
            type: "string",
            description: "Состояние участника пользователя в чате",
            enum: ["active", "kicked", "leaved"],
            example: "active",
            // @ts-ignore
            "x-go-name": "State",
          },
          user_id: {
            type: "integer",
            format: "int64",
            description: "ID пользователя в системе",
            example: 123,
            // @ts-ignore
            "x-go-name": "UserID",
          },
        },
      },
      UserListResponseItem: {
        type: "object",
        description:
          "Объект пользователя, содержащий данные профиля, статус активности и временные метки",
        required: [
          "id",
          "created_at",
          "available",
          "is_online",
          "connected",
          "is_active",
          "is_technical_account",
        ],
        properties: {
          avatar_url: {
            type: "string",
            format: "uri",
            description: "URL аватара пользователя",
            example: "https://avatar.demo/demo-avatar",
            // @ts-ignore
            "x-go-name": "Avatar",
          },
          available: {
            type: "boolean",
            description: "Показывает, доступен ли пользователь для общения",
            example: true,
          },
          connected: {
            type: "boolean",
            description: "Показывает, подключался ли пользователь к системе",
            example: true,
          },
          created_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          external_id: {
            type: "string",
            description: "Внешний идентификатор пользователя (например, из внешней системы)",
            example: "user_324",
            // @ts-ignore
            "x-go-name": "ExternalID",
          },
          first_name: {
            type: "string",
            description: "Имя пользователя",
            example: "John",
          },
          id: {
            type: "integer",
            format: "int64",
            description: "Внутренний ID пользователя",
            example: 1,
            // @ts-ignore
            "x-go-name": "ID",
          },
          is_active: {
            type: "boolean",
            description: "Флаг, указывающий, помечен ли пользователь как активный",
            example: true,
          },
          is_online: {
            type: "boolean",
            description: "Флаг, указывающий, находится ли пользователь в сети",
            example: true,
          },
          is_technical_account: {
            type: "boolean",
            description:
              "Показывает, является ли пользователь технической (системной) учётной записью",
            example: false,
          },
          last_name: {
            type: "string",
            description: "Фамилия пользователя",
            example: "Doe",
          },
          revoked_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          updated_at: {
            description: "Дата и время в формате RFC 3339 с микросекундами",
            example: "2006-01-02T15:04:05.999999Z07:00",
            type: "string",
            format: "date-time",
            nullable: true,
            // @ts-ignore
            "x-go-type": "DateTimeRFC3339Micro",
          },
          username: {
            type: "string",
            description: "Имя пользователя или логин",
            example: "demo-username",
          },
        },
      },
      MessageListResponseItem: {
        description: "Представляет элемент сообщения в списке сообщений",
        type: "object",
        allOf: [
          {
            $ref: "#/components/schemas/Message",
          },
          {
            type: "object",
            required: ["created_at"],
            properties: {
              channel_id: {
                type: "integer",
                format: "int64",
                example: 1,
                // @ts-ignore
                "x-go-name": "ChannelID",
                description: "ID канала, в который отправлено сообщение",
              },
              channel_sent_at: {
                description: "Дата и время в формате RFC 3339 с микросекундами",
                example: "2006-01-02T15:04:05.999999Z07:00",
                type: "string",
                format: "date-time",
                nullable: true,
                // @ts-ignore
                "x-go-type": "DateTimeRFC3339Micro",
              },
              created_at: {
                description: "Дата и время в формате RFC 3339 с микросекундами",
                example: "2006-01-02T15:04:05.999999Z07:00",
                type: "string",
                format: "date-time",
                // @ts-ignore
                "x-go-type": "DateTimeRFC3339Micro",
              },
              updated_at: {
                description: "Дата и время в формате RFC 3339 с микросекундами",
                example: "2006-01-02T15:04:05.999999Z07:00",
                type: "string",
                format: "date-time",
                nullable: true,
                // @ts-ignore
                "x-go-type": "DateTimeRFC3339Micro",
              },
            },
          },
        ],
      },
      SendMessageRequestBody: {
        type: "object",
        description:
          "Представляет полезную нагрузку сообщения, включая содержимое, вложения и связанные метаданные в зависимости от типа сообщения",
        required: ["chat_id", "scope"],
        properties: {
          chat_id: {
            type: "integer",
            format: "int64",
            description: "ID чата‑получателя сообщения",
            example: 123,
            // @ts-ignore
            "x-go-name": "ChatID",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "required",
            },
          },
          content: {
            type: "string",
            description:
              "Текстовое содержимое сообщения (обязательно только для текстовых сообщений)",
            example: "Hello!",
          },
          items: {
            type: "array",
            description: "Файловые вложения (обязательно для сообщений типа file, audio и image)",
            items: {
              type: "object",
              description: "Файловое вложение",
              required: ["id"],
              properties: {
                caption: {
                  type: "string",
                  description: "Подпись к файлу",
                  example: "demo caption",
                  // @ts-ignore
                  "x-oapi-codegen-extra-tags": {
                    binding: "min=1,max=1024",
                  },
                },
                id: {
                  type: "string",
                  format: "uuid",
                  description: "Уникальный идентификатор файла",
                  example: "e33e5398-814a-47d6-902a-466ba120ce45",
                  // @ts-ignore
                  "x-go-name": "ID",
                },
              },
            },
          },
          note: {
            type: "string",
            description:
              "Примечание или описание файла (требуется для сообщений с файлами, аудио и изображениями)",
            example: "demo note",
          },
          order: {
            description: "Данные заказа (обязательно для сообщений типа order)",
            allOf: [
              {
                $ref: "#/components/schemas/MessageOrder",
              },
            ],
          },
          product: {
            description: "Данные продукта (обязательно для сообщений типа product)",
            allOf: [
              {
                $ref: "#/components/schemas/MessageProduct",
              },
            ],
          },
          quote_message_id: {
            type: "integer",
            format: "int64",
            description: "ID цитируемого сообщения (только для текстовых сообщений)",
            example: 42,
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          scope: {
            type: "string",
            description: "Область видимости сообщения (например: user, system)",
            example: "user",
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "required",
            },
          },
          type: {
            type: "string",
            description: "Тип сообщения (например: text, file, order, product)",
            example: "text",
          },
          transport_attachments: {
            allOf: [
              {
                $ref: "#/components/schemas/MessageTransportAttachments",
              },
            ],
            nullable: true,
          },
        },
      },
      UpdateCommandRequestBody: {
        description: "Представляет тело запроса для обновления новой команды",
        type: "object",
        properties: {
          name: {
            description: "Уникальный идентификатор команды",
            example: "Demo command name",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          description: {
            description: "Читаемое описание назначения/поведения команды",
            example: "Demo command description",
            type: "string",
            maxLength: 64,
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
            // @ts-ignore
            "x-omitempty": false,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "omitempty,min=0,max=64",
            },
          },
        },
      },
      CreateCommandRequestBody: {
        description: "Представляет тело запроса для создания новой команды",
        type: "object",
        properties: {
          name: {
            description: "Уникальный идентификатор команды",
            example: "Demo command name",
            type: "string",
            // @ts-ignore
            "x-go-type-skip-optional-pointer": true,
          },
          description: {
            description: "Читаемое описание назначения/поведения команды",
            example: "Demo command description",
            type: "string",
            maxLength: 64,
            // @ts-ignore
            "x-oapi-codegen-extra-tags": {
              binding: "required,min=0,max=64",
            },
          },
        },
        required: ["description"],
      },
    },
  },
};
