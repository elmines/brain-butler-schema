//@flow

export type Metadata = {
	timestamp: Date,
	info?: {
		samplingRate?: number,
		channelNames?: Array<string>
	}
}

//EegPacket conforms to @neurosity/pipes's schema for eeg packets
export type EegPacket = Metadata & {data: Array<Number>};

//EegEpoch matches the schema of objects returned by @neurosity/pipes's epoch() operator
export type EegEpoch  = Metadata & {data: Array<Array<Number>>};

export type MotionPacket = Metadata & {x: Number, y: Number, z: Number};
export type GyroPacket = MotionPacket;
export type AccPacket = MotionPacket;

export type MotionEpoch = Metadata & {x: Array<Number>, y: Array<Number>, z: Array<Number>};
export type GyroEpoch = MotionEpoch;
export type AccEpoch = MotionEpoch;

export type Orientation = "portrait" | "landscape";
export type OrientationPacket = Metadata & {orient: Orientation};
export type OrientationEpoch = Metadata & {orient: Array<Orientation>};

export type Role = "eeg" | "gyro" | "acc" | "orient";
export type Data = EegPacket | EegEpoch | MotionPacket | MotionEpoch | OrientationPacket | OrientationEpoch;

export type Message = {role: Role, data: Data};


export type Command = "rotate" | "brighten";
