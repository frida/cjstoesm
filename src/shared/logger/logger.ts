import {LogLevelKind} from "./log-level-kind.js";
import {Loggable} from "./loggable.js";

/**
 * A logger that can print to the console
 */
export class Logger implements Loggable {
	constructor(readonly logLevel: LogLevelKind) {}

	/**
	 * Logs info-related messages
	 */
	info(...messages: unknown[]): void {
		if (this.logLevel < LogLevelKind.INFO) return;
		console.log(...messages);
	}

	/**
	 * Logs verbose-related messages
	 */
	verbose(...messages: unknown[]): void {
		if (this.logLevel < LogLevelKind.VERBOSE) return;
		console.log("[VERBOSE]", ...messages);
	}

	/**
	 * Logs debug-related messages
	 */
	debug(...messages: unknown[]): void {
		if (this.logLevel < LogLevelKind.DEBUG) return;
		console.log("[DEBUG]", ...messages);
	}

	/**
	 * Logs warning-related messages
	 */
	warn(...messages: unknown[]): void {
		console.log("(!)", ...messages);
	}
}
