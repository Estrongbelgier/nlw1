import { Request, Response } from "express"; // Resolver problema "any" do typescript
//Conexão com o banco de dados
import knex from "../database/conn";

class PointsController {
  async create(req: Request, res: Response) {
    const {
      nome,
      email,
      whatsapp,
      latitude,
      longitude,
      cidade,
      uf,
      items,
    } = req.body;

    const trx = await knex.transaction();
    // Knex transaction, para tratamento de querys dependentes

    const point = {
      nome,
      image:
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=60-fake",
      email,
      whatsapp,
      latitude,
      longitude,
      cidade,
      uf,
    };

    const insertedIds = await trx("points").insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    await trx("point_items").insert(pointItems);

    await trx.commit(); // Sempre que usar transactions não esqueca de dar um commit

    return res.json({
      id: point_id,
      ...point,
    });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const point = await knex("points").where("id", id).first();

    if (!point) {
      return res.status(400).json({ message: "Lugar não encontrado" });
    }

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.titulo");

    return res.json({ point, items });
  }

  async index(req: Request, res: Response) {
    const { cidade, uf, items } = req.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));
    // Fazendo a verificacao da do conteudo String, separados por , e tirando os espaços do começo e do final.

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("cidade", String(cidade))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    return res.json(points);
  }
}

export default new PointsController();
// ATENCAO podemos exportar um novo objeto da classe ou intancia-lá onde for usar, mas para instacias devemos exportar utilizar sem new
