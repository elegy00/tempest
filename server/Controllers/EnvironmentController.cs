using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Controllers.Model;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnvironmentController : ControllerBase
    {
        private readonly ILogger<EnvironmentController> _logger;

        public EnvironmentController(ILogger<EnvironmentController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public string AddMeasure(MeasurePoint data)
        {
            System.Console.Out.WriteLine($"Le temperatuüre:\n{data.Temperature}");
            return "süccess";
        }
    }
}
