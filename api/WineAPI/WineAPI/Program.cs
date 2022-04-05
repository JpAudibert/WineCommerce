using Microsoft.EntityFrameworkCore;
using WineAPI.Environment.EFCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("postgres");
builder.Services.AddDbContext<WineContext>(options => options.UseNpgsql(connectionString));

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

app.MapGet("/products", async (WineContext wineContext) => Results.Json(await wineContext.Items.ToListAsync()));

app.MapPost("/order", async (WineContext wineContext) =>
{

});

app.Run();