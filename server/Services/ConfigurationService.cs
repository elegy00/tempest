
using System;

namespace Tempest.Services
{
    public class ConfigurationService : IConfigurationService
    {
        public String GetConnectionString()
        {
            String connectionString = Environment.GetEnvironmentVariable("ConnectionString");
            return connectionString;
        }

    }
}
