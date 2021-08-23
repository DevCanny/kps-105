db.createColletion("PlayerData", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["fullname", "email", "number", "class", "age"],
            properties: {
                fullname: {
                    bsonType: "string",
                    description: "must be included"
                },
                email: {
                    bsonType: "string",
                    description: "must be included"
                },
                number: {
                    bsonType: "number",
                    description: "must be included"
                },
                class: {
                    bsonType: "string",
                    description: "must be included"
                },
                age: {
                    bsonType: "number",
                    description: "must be included"
                },
            }
        }
    }
})