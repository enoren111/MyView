using Microsoft.AspNetCore.Mvc;
using Moq;
using MyViewBackend.Controllers;
using MyViewBackend.Models;
using MyViewBackend.Services;
using Xunit;

public class UserControllerTests
{
    private readonly Mock<UserService> _mockService;
    private readonly UserController _controller;
    private readonly User _user;

    public UserControllerTests()
    {
        // Mock the UserService
        _mockService = new Mock<UserService>();
        _controller = new UserController(_mockService.Object);

        // Setup test user
        _user = new User { Id = "1", Name = "John Doe", Email = "john@example.com" };
    }

    [Fact]
    public async Task AddUser_ReturnsOk_WhenUserIsAdded()
    {
        // Arrange
        _mockService.Setup(service => service.AddUser(It.IsAny<User>()))
            .Returns(Task.CompletedTask);

        // Act
        var result = await _controller.AddUser(_user);

        // Assert
        Assert.IsType<OkResult>(result);
    }

    [Fact]
    public async Task GetUser_ReturnsOk_WithUser_WhenUserExists()
    {
        // Arrange
        _mockService.Setup(service => service.GetUser(It.IsAny<string>()))
            .ReturnsAsync(_user);

        // Act
        var result = await _controller.GetUser("1");
        var okResult = result as OkObjectResult;

        // Assert
        Assert.IsType<OkObjectResult>(result);
        Assert.Equal(_user, okResult.Value);
    }

    [Fact]
    public async Task GetUser_ReturnsNotFound_WhenUserDoesNotExist()
    {
        // Arrange
        _mockService.Setup(service => service.GetUser(It.IsAny<string>()))
            .ReturnsAsync((User)null);

        // Act
        var result = await _controller.GetUser("2");

        // Assert
        Assert.IsType<NotFoundResult>(result);
    }
}
