using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace server.Data {
    public class EnvironmentMeasurement  {
        
        public int Id {get;set;}

        public decimal Temperature { get; set; }
        public decimal Humidity { get; set; }
        public decimal Pressure { get; set; }
        public int Battery { get; set; }
        public int Voltage { get; set; }
        public int Linkquality { get; set; }
  

        public string Topic {get;set;}

        public DateTime Timestamp {get;set;}
        public DateTime CreationDate { get;set;}
    }
}