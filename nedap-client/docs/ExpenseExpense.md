# NedapOnsApi.ExpenseExpense

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**expenseDate** | **Date** | The date on which the expense was made (or booked) | [optional] 
**verifyDate** | **Date** | The date on which the expense was verified (through an approval process) | [optional] 
**expenseTypeObjectId** | **Number** | Reference to the expense type that underlies the expense. This id is guaranteed not to change within an customer environment. There is no API object available. | [optional] 
**employeeObjectId** | **Number** | Id of the employee to which the expense belongs. | [optional] 
**amount** | **Number** | The expense amount. This can kilometers, hours, or money. &lt;p&gt; Either an abosulte value or the sum of calculated value and deviation. &lt;/p&gt; | [optional] 
**calculatedAmount** | **Number** | An expense can be calculated automatically from other information. In such cases the calculated amount repesents the sum of this information. | [optional] 
**deviation** | **Number** | Employees are given the option to register a deviation to the calculated amount. | [optional] 
**description** | **String** | Employees may need to give a description of the expense. | [optional] 
**expenseDistances** | [**[ExpenseExpenseDistance]**](ExpenseExpenseDistance.md) | For expenses that represent a distance, there may be {@link ExpenseDistance}s to further account the expense. &lt;p&gt;Distances are ordered based on the underlying work (e.g. client visits)&lt;/p&gt; | [optional] 
**sourceType** | **Number** |  | [optional] 
**departureLocation** | [**DepartureLocation**](DepartureLocation.md) |  | [optional] 
**departureClusterObjectId** | **Number** |  | [optional] 
