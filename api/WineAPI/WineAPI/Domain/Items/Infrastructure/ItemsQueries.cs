using Dapper;
using Npgsql;
using System.Buffers.Text;
using System.Text;

namespace WineAPI.Domain.Items.Infrastructure;

public class ItemsQueries
{
    private readonly string _connectionString;

    public ItemsQueries(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("postgres");
    }

    public async Task<IEnumerable<Item>> GetAllItems()
    {
        using var connection = new NpgsqlConnection(_connectionString);

        const string sql = @" SELECT id, 
	                                 name, 
	                                 description, 
	                                 price, 
	                                 image 
                                FROM items ";

        return await connection.QueryAsync<Item>(sql);
    }

    public async Task<IEnumerable<Item>> GetItem(int itemId)
    {
        using var connection = new NpgsqlConnection(_connectionString);

        const string sql = @" SELECT id, 
	                                 name, 
	                                 description, 
	                                 price, 
	                                 image 
                                FROM items
                               WHERE id = @itemId ";

        return await connection.QueryAsync<Item>(sql, param: new { itemId });
    }
}
