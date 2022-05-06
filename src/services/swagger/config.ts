import ip from "ip"

const localIp = ip.address()

const swaggerJson = {
  swagger: "2.0",
  host: `${localIp}:${process.env.API_PORT}`,
  basePath: "/api",
  info: {
    title: `${process.env.API_TITLE}`,
    version: `${process.env.API_VERSION}`,
  },
  schemes: ["http"],
  // use for model definition
  definitions: {
    Link: {
      type: "object",
      properties: {
        linkId: {
          description: "id of link",
          type: "integer",
        },

        linkType: {
          description: "Type of the link (video or photo).",
          type: "string",
        },
        URL: {
          description: "url to fetch the media.",
          type: "string",
        },
        title: {
          description: "Title of the media.",
          type: "string",
        },
        addDate: {
          description: "Date of creation of the media.",
          type: "string",
        },
        publicationDate: {
          description: "Date of use",
          type: "string",
        },
        thumbnail: {
          description: "Media for preview.",
          type: "string",
        },
        height: {
          description: "height of media",
          type: "integer",
        },
        width: {
          description: "width of media",
          type: "integer",
        },
        duration: {
          description: "duration of media (video only) in seconds.",
          type: "integer",
        },
      },
      required: ["linkType", "URL", "title", "addDate", "publicationDate", "thumbnail", "height", "width"],
    },
  },
  paths: {
    "/link": {
      get: {
        tags: ["link"],
        summary: "get all links",
        description: "all usllinksiers will be retreive from DB",
        responses: {
          "200": {
            description: "Successfully get all links ",
          },
        },
      },
      post: {
        tags: ["link"],
        summary: "Save a new link in database",
        description: "Save a new link in database",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "registered links",
            schema: {
              $ref: "#/definitions/Link",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successfully save new link",
          },
        },
      },
      put: {
        tags: ["link"],
        summary: "Update a link",
        description: "Update a link from DB by its id",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "some link values to update",
          },
        ],
        responses: {
          "200": {
            description: "Successfully get the requestesd link",
          },
        },
      },
    },
    "/link/{linkId}": {
      get: {
        tags: ["link"],
        summary: "Get a single link",
        description: "Get a link from DB by its id",
        parameters: [
          {
            name: "linkId",
            in: "path",
            required: true,
            type: "number",
            description: "Id of a link (link_id)",
          },
        ],
        responses: {
          "200": {
            description: "Successfully get the requestesd link",
          },
        },
      },
      delete: {
        tags: ["link"],
        summary: "Delete a link by id",
        description: "Delete a link by id, the link won't be erase from DB. instead, the deleted_at attribut will be updated",
        parameters: [
          {
            name: "linkId",
            in: "path",
            required: true,
            type: "number",
            description: "Id of a link (link_id)",
          },
        ],
        responses: {
          "200": {
            description: "Successful deletion",
          },
        },
      },
    },
  },
}

export default swaggerJson
