using Microsoft.EntityFrameworkCore;
using System.Buffers.Text;
using WineAPI.Domain.Items.Infrastructure;
using WineAPI.Environment.EFCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("postgres");
builder.Services.AddDbContext<WineContext>(options => options.UseNpgsql(connectionString));

builder.Services.AddScoped<ItemsQueries>();

builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseCors();

app.MapGet("/products", async (ItemsQueries itemsQueries) => 
{
    return Results.Ok(await itemsQueries.GetAllItems());
});

app.MapGet("/products/{id}", async (ItemsQueries itemsQueries, int id) =>
{
    return Results.Ok(await itemsQueries.GetItem(id));
});

app.UseCors();

app.Run();