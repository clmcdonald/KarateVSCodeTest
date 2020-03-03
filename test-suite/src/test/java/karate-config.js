function fn() {
    var env = karate.env; // get system property 'karate.env'
    karate.log('karate.env system property was:', env);
    if (!env) {
        env = 'local';
    }
    var config = {
        env: env,
        serviceUrl: 'http://localhost:24564/test',
    }
    return config;
}