using assignmentapi.Helper;
using assignmentapi.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentapi.Controllers
{
	[Route("api/")]
	[ApiController]
	[EnableCors("AllowOrigin")]
	public class AuthController : Controller
	{
		[HttpGet]
		[Route("Authorization")]
		public IActionResult Authorization(string username, string password)
		{

			AdminModel user1 =null;
			foreach (var user in HelperClass.Adminlist)
			{
				if (user.username == username && user.password == password)
				{
					user1=user;
					break;
				}

			}
			if (user1 != null)
			{
				return Ok("Success");
			}
				return BadRequest();

		}
		[HttpGet]
		[Route("GetUsers")]
		public IActionResult getusers()
		{
			var users = HelperClass.Userlist.ToList();
			return Ok(users);
		}

		[HttpPost]
		[Route("AddNewUser")]
		public IActionResult AddUser(UserModel user)
		{
			if (user.role == "User")
			{
				HelperClass.Userlist.Add(user);
			}
			else
			{
				AdminModel admin = new AdminModel();
				admin.username = user.fname + user.lname;
				admin.password = "123456789";
				HelperClass.Adminlist.Add(admin);

			}
			return Ok();

		}



	}
}
