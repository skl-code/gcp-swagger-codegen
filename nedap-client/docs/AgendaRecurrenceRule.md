# NedapOnsApi.AgendaRecurrenceRule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrenceType** | [**AgendaRecurrenceType**](AgendaRecurrenceType.md) |  | 
**interval** | **Number** | Must be &gt;&#x3D; 1. The interval used in calculating the occurrences. The recurrence rule specifies when an occurrence might occur. Then the &#x27;interval&#x27; is used to determine which of these occurrences actually occurs. A value of 1 means that every occurrence occurs, a value of 2 means that every other occurrence occurs, etc. | [optional] [default to 1]
**weekdays** | **[Number]** | An array containing all days of the week the occurrence should occur. Is only used when the recurrence rule &#x27;weekly&#x27; is selected. Defaults to the &#x60;startDate&#x60; day integer of the parent event when omitted or null. Days of the week are represented as follows:   * 1: Monday   * 2: Tuesday   * 3: Wednesday   * 4: Thursday   * 5: Friday   * 6: Saturday   * 7: Sunday | [optional] 
**repeatUntil** | **Date** | Last day on which an occurrence may start (inclusive). When omitted or null, recurs indefinitely. | [optional] 
