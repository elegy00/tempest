
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using server.Data;
using HotChocolate;

namespace server.GQL {

    public class Query
    {
                
        public IQueryable<EnvironmentMeasurement> Measurements([Service] EnvironmentContext context)
        {
            return context.Measurements;
        }

        
    }
}