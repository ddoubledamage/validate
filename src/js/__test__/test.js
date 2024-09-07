import { Validator } from "../app";

describe("Validator", () => {
    describe("validateUsername", () => {
        test('should return true for valid usernames', () => {
            const validUsernames = [
                "userName",
                "username",
                "valid_username",
                "valid_user-n1me",
                "user_name",
                "valid_111_Username"
            ];

            validUsernames.forEach(username => {
                expect(Validator.validateUsername(username)).toBe(true);
            });
        });

        test('should return false for invalid usernames', () => {
            const invalidUsernames = [
                "12345",
                "-invalidUser",
                "_invalidUser",
                "username__",
                "username-",
                "user1234",
            ];

            invalidUsernames.forEach(username => {
                expect(Validator.validateUsername(username)).toBe(false);
            });
        });
    });
});