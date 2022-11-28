enum Environment {
  Local, // yarn dev
  Develop, // Run in develop server
  Staging, // Run in staging server
  Production, // Run in production server
  Test, // Test
}

namespace Environment {
  export function isTest(type: Environment): boolean {
    return type == Environment.Test;
  }
}

const currentEnv = Environment.Local;

export { Environment, currentEnv };
