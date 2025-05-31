package handlers

import (
	"github.com/gofiber/fiber/v2"
)

func Auth(c *fiber.Ctx) error {
	return c.Render("auth", fiber.Map{}, "layouts/main")
}

// POST /login — redirect unconditionally
func AuthLogin(c *fiber.Ctx) error {
	username := c.FormValue("username")
	password := c.FormValue("password")

	// TODO: Authenticate logic (dummy for now)
	if username == "admin" && password == "admin" {
		return c.Redirect("/welcome")
	}
	return c.Redirect("/welcome")
}

func AuthSignup(c *fiber.Ctx) error {
	username := c.FormValue("username")
	email := c.FormValue("email")
	password := c.FormValue("password")

	// TODO: Save user data to DB (dummy)
	println("Signup ->", username, email, password)
	return c.Redirect("/welcome")
}
