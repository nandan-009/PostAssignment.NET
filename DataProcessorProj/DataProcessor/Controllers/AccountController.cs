﻿using System.IdentityModel.Tokens.Jwt;
using System.Text;
using DataProcessor.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace DataProcessor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _config;
        public AccountController(IConfiguration config)
        {
            this._config = config;
        }


        [HttpPost]
        [Route("login")]
        public IActionResult Login(User user)
        {
            //validate user from database
            if (user.UserName == "admin" && user.Password == "admin123")
            {
                //generate token
                var secretKey = _config["jwt:secretKey"];
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

                var tokenParams = new JwtSecurityToken
                (
                    issuer: _config["jwt:issuer"],
                    audience: _config["jwt:audience"],
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256)
           
                );

                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.WriteToken(tokenParams);

                return Ok(new { token = token });
            }
            else
            {
                return BadRequest("invalid user credentials");
            }
        }
    }
}
