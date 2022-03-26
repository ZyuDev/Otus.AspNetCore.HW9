using hw9.backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace hw9.backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Login(LoginDto data)
        {
            var loginResult = new LoginResultDto();
            if (data.UserName == "admin" && data.Password == "1")
            {
                loginResult.Message = "Loged in";
            }
            else
            {
                loginResult.Status = -1;
                loginResult.Message = "User/password pair is not valid ";
            }

            return Ok(loginResult);
        }
    }
}
