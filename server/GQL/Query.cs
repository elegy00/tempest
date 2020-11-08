
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using server.Data;
using HotChocolate;
using HotChocolate.Types;
using System;

namespace server.GQL {
    public class Query
    {
                
        [UseFiltering]
        public IQueryable<EnvironmentMeasurement> Measurements([Service] EnvironmentContext context)
        {
            return context.Measurements;
        }
    }
}