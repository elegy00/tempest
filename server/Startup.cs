using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using HotChocolate;

using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Playground;
using server.GQL;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using HotChocolate.Types;

namespace server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSingleton<EnvironmentContext>();
            var schema = SchemaBuilder.New()
              .AddQueryType<Query>()
              .BindClrType<DateTime, DateTimeType>()
              .Create();
            


            services.AddGraphQL(schema);
            //  services
            //     .AddGraphQLServer()
            //     .AddQueryType<Query>();
            
            PreventAsyncError(services);
        }

                private void PreventAsyncError(IServiceCollection services)
        {
            // kestrel
            services.Configure<KestrelServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });

            // IIS
            services.Configure<IISServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, EnvironmentContext context)
        {
            
            context.Database.Migrate();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }


            app.UseGraphQL("/graphql");

            app.UsePlayground();
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
       }
    }
}
