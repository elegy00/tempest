using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Controllers.Model;
using server.Data;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnvironmentController : ControllerBase
    {
        private readonly ILogger<EnvironmentController> _logger;
        private readonly EnvironmentContext dbContext;

        public EnvironmentController(ILogger<EnvironmentController> logger, EnvironmentContext context)
        {
            _logger = logger;
            dbContext = context;
        }

        [HttpPost]
        public EnvironmentMeasurement AddMeasure(MeasurePoint data)
        {
            if(data.Topic.StartsWith("zigbee2mqtt/0x")){
                var dbEntry = ConvertToDb(data);
                dbContext.Measurements.Add(dbEntry);
                dbContext.SaveChanges();
                return dbEntry;
            }

            return null;
        }

        private EnvironmentMeasurement ConvertToDb(MeasurePoint data) {
            return new EnvironmentMeasurement() {
                Battery = data.Battery,
                CreationDate = data.Timestamp,
                Humidity = data.Humidity,
                Linkquality = data.Linkquality,
                Pressure = data.Pressure,
                Temperature = data.Temperature,
                Timestamp = data.Timestamp,
                Topic = data.Topic,
                Voltage = data.Voltage


            };
        }
    }
}
