import MinecraftTextFormat from './MinecraftTextFormat';

const VueMinecraftTextFormat = {
	install(app) {
		app.component('minecraft-text-format', MinecraftTextFormat);
	}
}

export default VueMinecraftTextFormat;
