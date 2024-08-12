using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MyViewBackend.Data;
using MyViewBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the DI container.
var connectionString = builder.Configuration.GetConnectionString("MongoDb");
var dbName = builder.Configuration["DatabaseSettings:DatabaseName"];
builder.Services.AddSingleton(new MongoDbContext(connectionString, dbName));
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<LoginService>();

builder.Services.AddHttpClient<ChatGPTService>(client =>
        {
            // Optionally configure the HttpClient here
        });

builder.Services.AddSingleton(sp => new ChatGPTService(
    sp.GetRequiredService<HttpClient>()
));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
