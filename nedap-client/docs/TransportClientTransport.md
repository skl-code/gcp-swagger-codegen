# NedapOnsApi.TransportClientTransport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**clientId** | **Number** | Id of {@link com.nedap.healthcare.domain.Client} for which these details are valid | 
**_date** | **Date** | Date for which the transport details for the given client is retrieved | 
**individualTransport** | **Boolean** | Is individual transport needed for this client at the given date | [default to false]
**hasWeelchairAssignment** | **Boolean** | Has this client a wheelchair assigned at the given date | [default to false]
**wlz** | **Boolean** | Receives this client WLZ care at the given date | [default to false]
**contractedTransport** | **Boolean** | Indicates whether the client uses contracted transport | [optional] [default to false]
**hourTypes** | [**[HourType]**](HourType.md) | Set of all {@link HourType} instances that can be used for this client | 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
