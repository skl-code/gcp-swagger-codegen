# NedapOnsApi.FinanceGroupActivitySuggestionModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activityObjectId** | **Number** | Optional selected activity object id recommended for the client. May be null to indicate &#x27;no suggestion&#x27;. | [optional] 
**clientObjectId** | **Number** | Client object id for which the suggestion applies. Required. | 
**surchargeActivityObjectIds** | **[Number]** | List of surcharge activity object ids associated with the suggestion. Required (empty list if none). | 
