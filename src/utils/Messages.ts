export const MESSAGES = {
    CREATED: {
        USER: {
            ACCOUNT: "User created successfully"
        },
        ACARA: "Acara created successfully",
        SUB_ACARA: "Sub Acara created successfully",
    },
    ERROR: {
        NOT_FOUND: {
            USER: {
                ACCOUNT: "User not found",

            },
            ACARA: "Acara not found",
            SUB_ACARA: "Sub Acara not found",
            USER_ID: "User ID not found",
            ROUTE: "Route not found, Check again your endpoint!",


        },
        ALREADY: {
            GLOBAL: {
                EMAIL: "Email is already exist",
                NIDN: "NIDN is already exist",
                NIM: "NIM is already exist"
            },
            USER: "User already exist",
        },
        INVALID: {
            GLOBAL: {
                EMAIL: "Email is invalid"
            },
            USER: {
                PASSWORD: "Password is wrong",
                PASSWORD_LENGTH: "Password must be at least 8 characters",

            },
            ANGKATAN: "Angkatan must be a number",
            ID: "ID is invalid",
            NIM: {
                FORMAT: "NIM must be a number",
                LENGTH: "NIM cannot be more than 14 characters"
            },
            AUTH: "Invalid credentials token",
            ANGGOTA: "You're not anggota",
            STATUS: "Status must be boolean type",
            NAME: "Name must be a string",
            JABATAN: "Jabatan is invalid",
            NEW_PASSWORD: "New password cannot be the same as the old password",
            IMAGE_SIZE: "Image size must be less than 5mb",
            ROLE_ADMIN: "You're not admin",
            FILE_TYPE: "Invalid Image Type",
            OTP_KEY: "Invalid OTP Key",
            ABSENSI: "Absensi is closed",
            ACARA_REGISTER: 'Acara is closed to register',
        },
        UNAUTHORIZED: {
            AUTH: "If you are not logged in, please log in first",
            FORBIDDEN: "You are not Authorized",
            EXPIRED: "Token Expired, please log in again",
            RECOGNIZED: "Token not recognized"
        },
        REQUIRED: {
            EMAIL: "Email is required",
            PASSWORD: "Password is required",
            NAME: "Name is required",
            ROLE_NAME: "Role Name is required",
            ANGKATAN_YEAR: "Angkatan year is required",
            NIDN: "NIDN is required",
            NIM: "NIM is required",
            ANGKATAN_ID: "Angkatan Id is required",
            IMAGE: "Image is required",
            JABATAN: "Jabatan is required",
            ANGGOTA_ID: "Anggota Id is required",
            COMPANY: "Company is required",
            START_DATE: "First Date is required when acara is open",
            END_DATE: "End Date is required when acara is open",
            ACARA: "Acara must be select",
            COORDINATE: "Coordinate is required",
            OLD_PASSWORD: "Old Password is required",
            NEW_PASSWORD: "New Password is required",
            CODE_ANGGOTA: "Cannot use NIM anggota without referal code",
            TITLE: "Title is required",
            DESCRIPTION: "Description is required",
            PRICE: "Price is required",
            ACARA_ID: "Acara Id is required",
            SUB_ACARA_ID: "Sub Acara Id is required",
            OTP_KEY: "OTP Key is required",
            OTP: "OTP is required",
        },
        RELATION: {
            ANGKATAN: "Angkatan cannot be deleted because it has a relationship"
        },
        SERVER_ERROR: {
            INTERNAL_SERVER_ERROR: "Internal server error"
        }
    },
    SUCCESS: {
        USER: "User logged in successfully",
        ACARA: {
            GET: "Success to fetch Acara",
            DELETE: "Success to delete Acara",
            UPDATE: "Success to update Acara"
        },
        PASSWORD: {
            CHANGE: "Success to change password"
        },
    }
}