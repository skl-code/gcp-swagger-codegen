# NedapOnsApi.OpenehrArchetypeSelection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archetypeId** | **String** | Archetype id. Can be a archetype concept id without version number, or an archetype id with a major, minor or patch version number. | [optional] 
**requestedPaths** | **[String]** | List of paths to request the values of. Paths will also match specializations, e.g. &#x27;/content[id4]&#x27; will also match &#x27;/content[id4.2]&#x27;. | [optional] 
**startDateTime** | **Date** | When provided, only data from compositions with a first event time after the provided start date/time will be included. | [optional] 
**endDateTime** | **Date** | When provided, only data from compositions with a first event time before the provided end date/time will be included. | [optional] 
