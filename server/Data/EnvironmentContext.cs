 
using System;
using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using server.Data;
using Tempest.Services;

public class EnvironmentContext : DbContext
    {
        public DbSet<EnvironmentMeasurement> Measurements { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configService = new ConfigurationService();
            optionsBuilder.UseNpgsql(configService.GetConnectionString())
           .UseSnakeCaseNamingConvention();
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Message>()
            // .HasIndex(m => m.Stream).HasName("messate_stream_idx");

            // modelBuilder.Entity<Commit>()
            // .Property(c => c.position)
            // .HasDefaultValue(0);
        }

    }