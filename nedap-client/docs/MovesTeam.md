# NedapOnsApi.MovesTeam

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unitId** | **Number** | Unique unit identifier for the team | [optional] 
**name** | **String** | Name of the team | [optional] 
**parentUnitId** | **Number** | Unit identifier of the parent team | [optional] 
**teamId** | **Number** | Identifier that links this planning team ( unit ) to an administrative team. | [optional] 
**validFrom** | **Date** | Date from which the team is valid | [optional] 
**validTo** | **Date** | Date until which the team is valid | [optional] 
**flexUnitId** | **Number** | Unit identifier for the linked flex team | [optional] 
**coreUnitId** | **Number** | Unit identifier for the linked core team | [optional] 
**isFlexTeam** | **Boolean** | Whether this team is a flex team for another team | [optional] 
**isCoreTeam** | **Boolean** | Whether this team is a core team for another team | [optional] 
**active** | **Boolean** | Indicates if this team is actively being used | [optional] 
**teamType** | [**MovesUnitType**](MovesUnitType.md) |  | [optional] 
**useBlockplanning** | **Boolean** | Indicates if the team is using blokplanning | [optional] 
**useSelfRostering** | **Boolean** | Indicates if self-rostering is enabled for this team | [optional] 
**selfRosteringStartDate** | **Date** | Date from which self-rostering is available | [optional] 
**rosterPublicationDate** | **Date** | The roster publication date for this team. Shifts and shift assignments made before this publication date are visible to employees. | [optional] 
