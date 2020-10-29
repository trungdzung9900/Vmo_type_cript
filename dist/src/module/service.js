"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
var model_1 = require("./model");
function successResponse(message, DATA, res) {
    res.status(model_1.response_status_codes.success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        DATA: DATA
    });
}
exports.successResponse = successResponse;
function failureResponse(message, DATA, res) {
    res.status(model_1.response_status_codes.success).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
        DATA: DATA
    });
}
exports.failureResponse = failureResponse;
function insufficientParameters(res) {
    res.status(model_1.response_status_codes.bad_request).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Insufficient parameters',
        DATA: {}
    });
}
exports.insufficientParameters = insufficientParameters;
function mongoError(err, res) {
    res.status(model_1.response_status_codes.internal_server_error).json({
        STATUS: 'FAILURE',
        MESSAGE: 'MongoDB error',
        DATA: err
    });
}
exports.mongoError = mongoError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGUvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpQ0FBZ0Q7QUFFaEQsU0FBZ0IsZUFBZSxDQUFDLE9BQWUsRUFBRSxJQUFTLEVBQUUsR0FBYTtJQUNyRSxHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLE1BQUE7S0FDUCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsMENBTUM7QUFFRCxTQUFnQixlQUFlLENBQUMsT0FBZSxFQUFFLElBQVMsRUFBRSxHQUFhO0lBQ3JFLEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksTUFBQTtLQUNQLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCwwQ0FNQztBQUVELFNBQWdCLHNCQUFzQixDQUFDLEdBQWE7SUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxJQUFJLEVBQUUsRUFBRTtLQUNYLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCx3REFNQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxHQUFRLEVBQUUsR0FBYTtJQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUFxQixDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pELE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxHQUFHO0tBQ1osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELGdDQU1DIn0=