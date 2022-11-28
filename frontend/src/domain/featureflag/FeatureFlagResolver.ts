import FeatureFlag from "./FeatureFlag";

export interface IFeatureFlagsResolver {
  resolve(): FeatureFlag;
}

class FeatureFlagResolver implements IFeatureFlagsResolver {
  resolve(): FeatureFlag {
    var featureFlag = new FeatureFlag();
    featureFlag.featureA = true;
    featureFlag.featureB = false;
    return featureFlag;
  }
}

class FeatureFlagResolverMock implements IFeatureFlagsResolver {
  private featureFlagResolver = new FeatureFlagResolver();

  resolve(): FeatureFlag {
    return this.featureFlagResolver.resolve();
  }
}

export const featureFlagResolverMock = new FeatureFlagResolverMock();
export const featureFlagResolver = new FeatureFlagResolver();
