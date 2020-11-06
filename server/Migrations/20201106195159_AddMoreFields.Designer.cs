﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace server.Migrations
{
    [DbContext(typeof(EnvironmentContext))]
    [Migration("20201106195159_AddMoreFields")]
    partial class AddMoreFields
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.0-rc.2.20475.6");

            modelBuilder.Entity("server.Data.EnvironmentMeasurement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasColumnName("id")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("Battery")
                        .HasColumnType("integer")
                        .HasColumnName("battery");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("creation_date");

                    b.Property<decimal>("Humidity")
                        .HasColumnType("numeric")
                        .HasColumnName("humidity");

                    b.Property<int>("Linkquality")
                        .HasColumnType("integer")
                        .HasColumnName("linkquality");

                    b.Property<decimal>("Pressure")
                        .HasColumnType("numeric")
                        .HasColumnName("pressure");

                    b.Property<decimal>("Temperature")
                        .HasColumnType("numeric")
                        .HasColumnName("temperature");

                    b.Property<DateTime>("Timestamp")
                        .HasColumnType("timestamp without time zone")
                        .HasColumnName("timestamp");

                    b.Property<string>("Topic")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("topic");

                    b.Property<int>("Voltage")
                        .HasColumnType("integer")
                        .HasColumnName("voltage");

                    b.HasKey("Id")
                        .HasName("pk_measurements");

                    b.ToTable("measurements");
                });
#pragma warning restore 612, 618
        }
    }
}
