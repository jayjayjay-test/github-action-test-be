import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateInitialDatasetDto } from "./dto/create-initial-dataset.dto";
import {
  InitialDataset,
  InitialDatasetDocument,
} from "./schemas/initial-dataset.schema";

@Injectable()
export class InitialDatasetsService {
  constructor(
    @InjectModel(InitialDataset.name)
    private initialDatasetModel: Model<InitialDatasetDocument>,
  ) {}


  }
}
