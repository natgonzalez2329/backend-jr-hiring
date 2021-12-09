const { NotFound, ServerError } = require('./test/utils/errors');

module.exports = async function Test2 (server, queries) {
    try {
        const response = await server.query(queries); // Will return an array with the results, empty array or error
        const data = JSON.parse(response);

        if(data.length === 0) {
            throw new Error('No data found.');
        }
        return data;
    } catch (error) {
        
        if(error.message === 'No data found.') {
            return new NotFound(error.message);
        } else {
            return new ServerError(error.message);
        }
    }
}
