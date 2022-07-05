import {ReadonlyFileSystem} from "../file-system/file-system.js";
import {Loggable} from "../logger/loggable.js";
import {TS} from "../../type/ts.js";

export interface TaskOptions {
	/**
	 * A logger that can print messages of varying severity depending on the log level
	 */
	logger: Loggable;

	/**
	 * The FileSystem to use. Useful if you want to work with a virtual file system. Defaults to using the "fs" module
	 */
	fileSystem: ReadonlyFileSystem;

	/**
	 * The base directory (defaults to process.cwd())
	 */
	cwd: string;

	/**
	 * A resolver for external module references.
	 */
	resolveModule?: (id: string, parent: string | null) => string;

	/**
	 * Determines how module specifiers are treated.
	 * - external (default): CommonJS module specifiers identifying libraries or built-in modules are preserved (default)
	 * - internal: CommonJS module specifiers identifying anything else than libraries or built-in modules are preserved
	 * - always: CommonJS module specifiers are never transformed.
	 * - never: CommonJS module specifiers are always transformed
	 * It can also take a function that is invoked with a module specifier and returns a boolean determining whether or not it should be preserved
	 */
	preserveModuleSpecifiers: "always" | "never" | "external" | "internal" | ((specifier: string) => boolean);

	/**
	 * Determines whether or not to include import assertions when converting require() calls referencing JSON files to ESM.
	 * - true (default): Import assertions will always be added when relevant.
	 * - false: Import assertions will never be added.
	 * It can also take a function that is invoked with a module specifier and returns a boolean determining whether or not an import assertion should be added
	 */
	importAssertions: boolean | ((specifier: string) => boolean);

	/**
	 * If given, a specific TypeScript version to use
	 */
	typescript: typeof TS;

	/**
	 * If true, debug information will be printed. If a function is provided, it will be invoked for each file name. Returning true from the function
	 * determines that debug information will be printed related to that file
	 */
	debug: boolean | string | ((file: string) => boolean);
}
