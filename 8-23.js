db.createColletion("PlayerData", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["gmail", "icloud", "yahoo"],
            properties: {
                gmail: {
                    bsonType: "string",
                    description: "must be included"
                },
                icloud: {
                    bsonType: "string",
                    description: "must be included"
                },
                yahoo: {
                    bsonType: "string",
                    description: "must be included"
                },
            }
        }
    }
})

db.createColletion("students", {validator: {$jsonSchema: {bsonType: "object",required: ["gmail", "icloud", "yahoo"],properties: {gmail: {bsonType: "string",description: "must be included"},icloud: {bsonType: "string",description: "must be included"},yahoo: {bsonType: "string",description: "must be included"},}}}})