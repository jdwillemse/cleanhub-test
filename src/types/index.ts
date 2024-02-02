enum HubState {
  DEMO,
  ACTIVE,
}
enum HubCategory {
  ASSIGNABLE,
  PORTFOLIO,
}
enum HubStage {
  PILOT,
  FULLY_ONBOARDED,
}
enum HubUnit {
  KG,
}
enum HubPageMode {
  RELEASED,
}
enum HubUnassignedState {
  PARTIALLY_ASSIGNED,
  UNASSIGNED,
}

interface HubImage {
  uuid: string;
  directLink: string;
  thumbnailDirectLink: string;
  processedDirectLink: null | string;
  processedThumbnailDirectLink: null | string;
  fileName: string;
  size: number;
}

type Hub = {
  uuid: string;
  state: HubState;
  category: HubCategory;
  stage: HubStage;
  name: string;
  displayName: string;
  slug: string;
  type: string;
  location: string;
  externalId: string;
  recoveredQuantity: number;
  recoveredQuantityUnit: HubUnit;
  totalRecoveredQuantity: number;
  collectionAndSortingParagraph: string;
  pageMode: HubPageMode;
  hubUnassignedRecoveryList: [
    {
      uuid: string;
      createdAt: string;
      state: HubUnassignedState;
      unassignedQuantity: number;
      assignedQuantity: number;
      quantityUnit: HubUnit;
    }
  ];
  referenceQuantityUnit: HubUnit;
  parentHubName: string;
  logo: HubImage;
  cardDescription: string;
  cardImage: HubImage;
  thankYouNote: string;
  portfolioAssignedQuantityPercentage: null;
  unassignedQuantityPercentage: number;
  unassignedQuantityTotal: number;
  assignable: boolean;
  formattedRecoveredQuantity: string;
  formattedTotalRecoveredQuantity: string;
};
