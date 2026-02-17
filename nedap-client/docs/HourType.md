# NedapOnsApi.HourType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | An unique ID of this hourtype | [optional] 
**description** | **String** | A description of this hourtype | [optional] 
**identificationNo** | **String** |  | [optional] 
**activityGroupObjectId** | **Number** |  | [optional] 
**externalCode3** | **String** |  | [optional] 
**active** | **Boolean** | Indicates if the hourtype is active and can be used in presencelogs | [optional] 
**payrolling** | **Boolean** |  | [optional] 
**direct** | **Boolean** | Indicates if the hourtype is for client time a.k.a. direct time | [optional] 
**systemDefined** | **Boolean** |  | [optional] 
**travelTime** | **Boolean** |  | [optional] 
**activityType** | **String** |  | [optional] 
**groupCare** | **Boolean** | Indicates if the hourtype is meant for group care | [optional] 
**transport** | **Boolean** |  | [optional] 
**quantityBased** | **Boolean** |  | [optional] 
**directAllowed** | **Boolean** | Indicates it is allowed to write direct clienttime on a presence log with this hourtype | [optional] 
**indirectAllowed** | **Boolean** | Indicates it is allowed to write indirect clienttime on a presence log with this hourtype | [optional] 
**travelAllowed** | **Boolean** | Indicates it is allowed to write travel clienttime on a presence log with this hourtype | [optional] 
**noShow** | **Boolean** | Indicates if the hour type is a no show hourtype | [optional] 
**snomedCode** | **String** | Corresponding snomed code used for data exchange with zibs | [optional] 
**travelCalculationDisabled** | **Boolean** | When set to true, this hourtype will not be used in travel calculations like travel time or distances | [optional] 
**absenceAllowed** | **Boolean** | Indicates if client(s) are allowed to be partially absent during an activity with this hourtype | [optional] 
**splitHourtype** | **Boolean** | When set to true, this hourtype will be divided in Administration | [optional] 
