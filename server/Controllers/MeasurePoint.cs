using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace server.Controllers.Model {
    public class MeasurePoint  {
        public decimal Temperature { get; set; }
        public decimal Humidity { get; set; }
        public decimal Pressure { get; set; }
        public int Battery { get; set; }
        public int Voltage { get; set; }
        public int Linkquality { get; set; }
    }
}