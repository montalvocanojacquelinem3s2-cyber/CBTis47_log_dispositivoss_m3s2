erDiagram

    USER ||--|| HOME : owns
    HOME ||--o{ DEVICE : contains

    USER {
        string user_id PK "US01"
        string name "Jacqueline Montalvo"
        string email "montalvo.cano.jacqueline.m3s2@email.com"
    }

    HOME {
        string home_id PK "HM01"
        string address "Av. 11"
        string city "Cordoba"
        string user_id FK "US01"
    }

    DEVICE {
        string device_id PK "D001"
        string name "Living Room Smart Bulb"
        string type "Smart Bulb"
        string brand "Philips Hue"
        string location "Living Room"
        string status "ON"
        date installed_at "2025-10-12"
        Log[] logs
    }

    DEVICE {
        string device_id PK "D002"
        string name "Kitchen Refrigerator"
        string type "Smart Refrigerator"
        string brand "Samsung"
        string location "Kitchen"
        string status "ACTIVE"
        date installed_at "2024-06-01"
        Log[] logs
    }

    DEVICE {
        string device_id PK "D003"
        string name "Bedroom Temperature Sensor"
        string type "Temperature Sensor"
        string brand "Xiaomi"
        string location "Bedroom"
        string status "ACTIVE"
        date installed_at "2025-01-15"
        Log[] logs
    }

    LOG {
        string log_id "L001"
        date timestamp "2026-02-21T08:00:00Z"
        string event_type "power_on"
        float value "1"
        string unit "boolean"
    }

    LOG {
        string log_id "L002"
        date timestamp "2026-02-21T09:15:00Z"
        string event_type "temperature_read"
        float value "4.2"
        string unit "Celsius"
    }

    LOG {
        string log_id "L003"
        date timestamp "2026-02-21T10:30:00Z"
        string event_type "temperature_read"
        float value "23.8"
        string unit "Celsius"
    }

    LOG {
        string log_id "L004"
        date timestamp "2026-02-21T11:00:00Z"
        string event_type "door_open"
        float value "1"
        string unit "boolean"
    }