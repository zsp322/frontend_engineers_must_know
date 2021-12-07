const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const maybeFail = (successProbability, result, error) => new Promise((res, rej) => Math.random() < successProbability ? res(result) : rej());

const maybeFailingOperation = async () => {
	await wait(10);
	return maybeFail(0.1, "result", "error");
}

const callWithRetry = async (fn, depth = 0) => {
	try {
		return await fn();
	}catch(e) {
		if (depth > 7) {
			throw e;
		}
		await wait(2 ** depth * 10);
	
		return callWithRetry(fn, depth + 1);
	}
}

const progressingOperation = async (startProgress = 0) => {
	await wait(10);
	const progress = Math.round(Math.min(startProgress + Math.random() / 3, 1) * 10) / 10;
	return {
		progress,
		result: progress === 1 ? "result" : undefined,
	};
}

const callWithProgress = async (fn, status, depth = 0) => {
	const result = await fn(status);

	// check completion
	if (result.progress === 1) {
		// finished
		return result.result;
	}else {
		// unfinished
		if (depth > 7) {
			throw result;
		}
		await wait(2 ** depth * 10);
	
		return callWithProgress(fn, result.progress, depth + 1);
	}
}

const result = await callWithProgress(progressingOperation);