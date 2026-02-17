# NedapOnsApi.ArrangementStakeholder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | UUID identifying this Stakeholder across applications | 
**timelineUuid** | **String** | UUID for the timeline that groups this Stakeholder with other Stakeholders and Intents | 
**intentUuid** | **String** | UUID of the Intent to which this Stakeholder is coupled | 
**employeeObjectId** | **Number** | Employee responsible for the Intent | [optional] 
**educationObjectId** | **Number** | Education required for the Intent | [optional] 
**responsibleClusterObjectId** | **Number** | Team responsible for the Intent | [optional] 
**executingClusterObjectId** | **Number** | Team executing the Intent | [optional] 
**presenceTime** | **Number** | Time (in minutes) present at the Intent | [optional] 
**extraTime** | **Number** | Client time (in minutes)  Time registered for the client where the stakeholder is not present at the client | [optional] 
**travelTime** | **Number** | Travel time (in minutes) | [optional] 
