function func1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const error = false;
            res({
                status: error,
                message: 'from func1',
            });
        }, 4000);
    });
}

function func2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const error = true;
            res();
        }, 2000);
    });
}

async function bootstrap() {
    console.log(new Date());
    const results = await Promise.all([func1(), func2()]);
    for (const result of results) {
        if (result.status) {
            console.log(`success ${result.message}`);
        } else {
            if (result.funcName === 'func1') {
                results[0] = await func1();
            }
            console.log(`error ${result.message}`);
        }
    }
    console.log(new Date());
}

bootstrap();